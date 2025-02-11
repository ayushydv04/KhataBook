const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const limiter = require("./middlewares/rateLimiter");
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/dbConnection");
const errorHandler = require("./middlewares/errorMiddleware")

const authRoutes = require("./routes/authRoutes");
const hisaabRoutes = require("./routes/hisaabRoutes");
// const protect = require("./middlewares/protect")

const {protect} = require("./middlewares/protect")

connectDB();

const app = express();

// Security Middlewares
app.use(helmet()); // Protects against well-known vulnerabilities
app.use(morgan("combined")); // Logs HTTP requests
app.use(cookieParser()); // Parses cookies
app.use(cors({ credentials: true, origin: process.env.CLIENT_URL })); // Enable CORS for frontend

// Rate Limiter (Prevents DDoS & Brute Force Attacks)
app.use(limiter);

// Body Parser Middleware (Added Missing Middlewares)
app.use(express.json()); // Parses JSON bodies
app.use(express.urlencoded({ extended: true })); // Parses URL-encoded data

// Routes
app.get("/home", protect, (req, res) => {
    res.redirect("/home");  // Use `res.redirect`
});
app.use("/auth", authRoutes);

// app.use("/hisaab", hisaabRoutes);


// Global Error Handling Middleware (MUST be last)
app.use(errorHandler);



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));










































// const express = require('express')
// const cors = require('cors')
// const cookieParser = require('cookie-parser')
// const connectDB = require("./config/dbConnection");
// const authRoutes = require("./routes/authRoutes");
// // const hisaabRoutes = require("./routes/hisaabRoutes");


// require("dotenv").config();
// connectDB();

// const app = express()

// // middlewares
// app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
// app.use(express.json());
// app.use(express.urlencoded({extended: true}))
// app.use(cookieParser())

// // routes
// app.use("/auth", authRoutes);


// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
