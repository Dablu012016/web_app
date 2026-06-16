
const errorMiddleware = (err, req, res, next) => {
  // console.log(" Error Middleware:", err);

  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    success: false,
    message: err.message || "Internal Server Error",
    errors: err.errors || null,
  });
//   console.log(errors[0].message);
  
};

module.exports = errorMiddleware;
