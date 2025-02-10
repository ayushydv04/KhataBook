// get the model
const userModel = require("../models/userModel");

// importing bcrypt to create salt and hash
const bcrypt = require("bcrypt");

// importing generteToken
const generateToken = require("../utils/generateToken");

module.exports.registerUser = async (req, res) => {
  try {
    const { name, email, phone, password } = req.body;
    let user = await userModel.findOne({ email });

    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    let salt = await bcrypt.genSalt();
    let hashedPassword = await bcrypt.hash(password, salt);

    user = await userModel.create({
        name,
        email,
        phone,
        password: hashedPassword,
    });

    let token = generateToken({email});

    res
      .cookie("token", token, {
         httpOnly: true, 
         secure: true,
         expires: new Date(Date.now() + 3600000 * 24 * 30), // 30 days
        })
      .json({ message: "User registered", user });
  } catch (error) {
    // res.status(500).json({ message: "Server error" + error.message });
    next(error);
  }
};

// Login User
module.exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });

    if (!user){
      return res.status(400).json({ message: "Email or Password incorrect" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch){
      let token = generateToken({email});
      res.cookie("token", token, {
        httpOnly: true,
        secure: true,
        expires: new Date(Date.now() + 3600000 * 24 * 30), // 30 days
      })
      res.status(200).send({ message: "Login successful", user });
    } 
    else{
      return res.status(400).json({ message: "Email or Password incorrect" });
    }
    

  } catch (error) {
    // res.status(500).json({ message: "Server error" +error.message });
    next(error);
  }
};

module.exports.logoutUser = (req, res) => { 
  res.cookie("token", "", { httpOnly: true, secure: true, expires: new Date(0) }).status(200).json({ message: "Logged out" });
};
