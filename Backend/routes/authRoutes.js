// Creating router
const express = require("express");
const { body } = require("express-validator"); // Import express-validator
const router = express.Router();

// Importing controllers
const {
  registerUser,
  loginUser,
  logoutUser,
} = require("../controllers/authController");


// Creating routes
router.post(
  "/register",
  [
    body("name").notEmpty().withMessage("Name is required"),
    body("email").isEmail().withMessage("Invalid email"),
    body("phone").notEmpty().withMessage("Phone number is required"),
    body("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters long"),
  ],
  registerUser
);

router.post("/login", loginUser);
router.post("/logout", logoutUser);


module.exports = router;
