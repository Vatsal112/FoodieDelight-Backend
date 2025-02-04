const dotenv = require("dotenv");

// dotenv init. To fetch environment variables from .env file.
dotenv.config();

const config = {
  API_HOSTS: process.env.API_HOSTS || ["*"],
  APP_NAME: process.env.APP_NAME || "Foodie Delight",
  SERVICE_PORT: process.env.SERVICE_PORT || "4000",
  MONGODB_URL: process.env.MONGODB_URL,
  DATABASE_NAME: process.env.DATABASE_NAME,
};

module.exports = config;
