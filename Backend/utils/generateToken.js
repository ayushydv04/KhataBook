const jwt = require("jsonwebtoken")

const generateToken = (data) => {
    return jwt.sign(data, process.env.JWT_SECRET, {expiresIn: "7d"});
};

module.exports = generateToken;






















// // sbse pehle require krnege
// const jwt = require("jsonwebtoken")


// // ye generateToken function kuch bhi receive krta h jo bhi aapko save krwana ho wo receive krta h, basically data receive krta h
// const generateToken = (data) => {
//     // Ye data receive krta h aur jo bhi ddata hm denge wo ye save krdega  jwt.sign ke andr, toh token m whi data hoga jo hm bhejenge
//     return jwt.sign(data, process.env.JWT_SECRET, {expiresIn: "7d"})  //// ab dena h mujhe jwt secret
    

// }

// module.exports = generateToken;