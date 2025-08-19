require("dotenv").config();

const config = {
  // Server configuration
  server: {
    port: process.env.PORT || 8080,
    host: process.env.HOST || "0.0.0.0",
    environment: process.env.NODE_ENV || "development",
  },

  // Database configuration
  database: {
    host: process.env.DB_HOST || "localhost",
    port: process.env.DB_PORT || 5432,
    name: process.env.DB_NAME || "devopsinterview",
    username: process.env.DB_USERNAME || "admin",
    password: process.env.DB_PASSWORD || "",
    ssl: process.env.DB_SSL === "true",
    maxConnections: parseInt(process.env.DB_MAX_CONNECTIONS) || 20,
    idleTimeoutMillis: parseInt(process.env.DB_IDLE_TIMEOUT) || 30000,
  },

  // Redis configuration
  redis: {
    host: process.env.REDIS_HOST || "localhost",
    port: process.env.REDIS_PORT || 6379,
    password: process.env.REDIS_PASSWORD || "",
    db: parseInt(process.env.REDIS_DB) || 0,
    keyPrefix: process.env.REDIS_KEY_PREFIX || "devops:",
  },

  // JWT configuration
  jwt: {
    secret: process.env.JWT_SECRET || "your-secret-key",
    expiresIn: process.env.JWT_EXPIRES_IN || "24h",
    refreshExpiresIn: process.env.JWT_REFRESH_EXPIRES_IN || "7d",
  },

  // Rate limiting
  rateLimit: {
    windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS) || 15 * 60 * 1000, // 15 minutes
    max: parseInt(process.env.RATE_LIMIT_MAX) || 100, // limit each IP to 100 requests per windowMs
  },

  // CORS configuration
  cors: {
    origin: process.env.CORS_ORIGIN || "http://localhost:3000",
    credentials: process.env.CORS_CREDENTIALS === "true",
  },

  // Logging configuration
  logging: {
    level: process.env.LOG_LEVEL || "info",
    file: {
      enabled: process.env.LOG_FILE_ENABLED === "true",
      filename: process.env.LOG_FILE_NAME || "logs/app.log",
      maxSize: process.env.LOG_FILE_MAX_SIZE || "10m",
      maxFiles: process.env.LOG_FILE_MAX_FILES || "5",
    },
  },

  // Security configuration
  security: {
    bcryptRounds: parseInt(process.env.BCRYPT_ROUNDS) || 12,
    sessionSecret: process.env.SESSION_SECRET || "your-session-secret",
  },

  // AWS configuration
  aws: {
    region: process.env.AWS_REGION || "us-west-2",
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    s3: {
      bucket: process.env.AWS_S3_BUCKET,
    },
  },

  // Monitoring configuration
  monitoring: {
    prometheus: {
      enabled: process.env.PROMETHEUS_ENABLED === "true",
      port: parseInt(process.env.PROMETHEUS_PORT) || 9090,
    },
  },
};

// Validate required configuration
const validateConfig = () => {
  const required = [
    "database.host",
    "database.name",
    "database.username",
    "database.password",
  ];

  const missing = required.filter((key) => {
    const value = key.split(".").reduce((obj, k) => obj && obj[k], config);
    return !value;
  });

  if (missing.length > 0) {
    throw new Error(`Missing required configuration: ${missing.join(", ")}`);
  }
};

// Validate configuration in production
if (process.env.NODE_ENV === "production") {
  validateConfig();
}

module.exports = config;
