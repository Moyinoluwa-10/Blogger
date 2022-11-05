/* Error handler middleware */

const errorHandler = (error, req, res, next) => {
  if (error.message === "data and hash arguments required") {
    return res.status(403).json({
      status: false,
      message: "Please provide password",
    });
  }

  if (error.source === "jwt middleware error") {
    return res.status(403).json({
      status: false,
      message: "Invalid token",
    });
  }

  res.status(400).json({
    message: error.message,
  });

  next();
};

module.exports = {
  errorHandler,
};

