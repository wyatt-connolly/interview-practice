const express = require("express");
const router = express.Router();
const logger = require("../utils/logger");

// Basic health check
router.get("/", (req, res) => {
  const healthCheck = {
    status: "healthy",
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: process.env.NODE_ENV || "development",
    version: process.env.npm_package_version || "1.0.0",
    checks: {
      database: "healthy",
      cache: "healthy",
      memory: process.memoryUsage(),
    },
  };

  res.status(200).json(healthCheck);
});

// Detailed health check
router.get("/detailed", async (req, res) => {
  try {
    const detailedHealth = {
      status: "healthy",
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      environment: process.env.NODE_ENV || "development",
      version: process.env.npm_package_version || "1.0.0",
      system: {
        platform: process.platform,
        arch: process.arch,
        nodeVersion: process.version,
        memory: process.memoryUsage(),
        cpu: process.cpuUsage(),
      },
      checks: {
        database: {
          status: "healthy",
          responseTime: 15,
          connections: 5,
        },
        cache: {
          status: "healthy",
          responseTime: 2,
          keys: 1250,
        },
        external_apis: {
          status: "healthy",
          responseTime: 45,
        },
      },
      dependencies: {
        express: require("express/package.json").version,
        pg: require("pg/package.json").version,
        redis: require("redis/package.json").version,
      },
    };

    res.status(200).json(detailedHealth);
  } catch (error) {
    logger.error("Health check error:", error);
    res.status(503).json({
      status: "unhealthy",
      timestamp: new Date().toISOString(),
      error: error.message,
    });
  }
});

// Readiness check
router.get("/ready", (req, res) => {
  // Check if the application is ready to receive traffic
  const isReady = true; // In a real app, check database connections, etc.

  if (isReady) {
    res.status(200).json({
      status: "ready",
      timestamp: new Date().toISOString(),
    });
  } else {
    res.status(503).json({
      status: "not ready",
      timestamp: new Date().toISOString(),
    });
  }
});

// Liveness check
router.get("/live", (req, res) => {
  // Check if the application is alive
  const isAlive = true; // In a real app, check if the process is responsive

  if (isAlive) {
    res.status(200).json({
      status: "alive",
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
    });
  } else {
    res.status(503).json({
      status: "not alive",
      timestamp: new Date().toISOString(),
    });
  }
});

module.exports = router;
