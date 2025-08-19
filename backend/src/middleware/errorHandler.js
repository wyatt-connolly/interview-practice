const logger = require("../utils/logger");

// Error handling middleware
const errorHandler = (err, req, res, next) => {
  // Log the error
  logger.error("Error occurred:", {
    error: err.message,
    stack: err.stack,
    url: req.url,
    method: req.method,
    ip: req.ip,
    userAgent: req.get("User-Agent"),
  });

  // Default error
  let error = {
    message: err.message || "Internal Server Error",
    status: err.status || 500,
  };

  // Handle specific error types
  if (err.name === "ValidationError") {
    error = {
      message: "Validation Error",
      status: 400,
      details: err.details,
    };
  } else if (err.name === "UnauthorizedError") {
    error = {
      message: "Unauthorized",
      status: 401,
    };
  } else if (err.name === "ForbiddenError") {
    error = {
      message: "Forbidden",
      status: 403,
    };
  } else if (err.name === "NotFoundError") {
    error = {
      message: "Not Found",
      status: 404,
    };
  } else if (err.name === "ConflictError") {
    error = {
      message: "Conflict",
      status: 409,
    };
  } else if (err.name === "RateLimitError") {
    error = {
      message: "Too Many Requests",
      status: 429,
    };
  }

  // Don't leak error details in production
  if (process.env.NODE_ENV === "production" && error.status === 500) {
    error.message = "Internal Server Error";
  }

  // Send error response
  res.status(error.status).json({
    success: false,
    error: {
      message: error.message,
      status: error.status,
      timestamp: new Date().toISOString(),
      ...(error.details && { details: error.details }),
      ...(process.env.NODE_ENV === "development" && { stack: err.stack }),
    },
  });
};

module.exports = errorHandler;
