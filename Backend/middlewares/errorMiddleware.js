const errorHandler = (err, req, res, next) => {
    console.error(err.stack); // Logs the error stack trace in the console
  
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode; // Ensure we return an error status
    res.status(statusCode).json({
      message: err.message || "Internal Server Error",
      stack: process.env.NODE_ENV === "production" ? null : err.stack, // Hide stack trace in production
    });
  };
  
  module.exports = errorHandler;
  