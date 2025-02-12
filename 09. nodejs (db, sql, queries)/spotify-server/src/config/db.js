//MS_SQL DB CONFIG
const Sequelize = require("sequelize"); //ORM
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    logging: false,
    dialectOptions: {
      options: {
        encrypt: true,
        trustServerCertificate: true,
      },
    },
  }
);

const startDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log("SQL database connected successfully!");
    // Sync models (create tables if they don't exist)
    await sequelize.sync();
  } catch (error) {
    console.error("Database connection error:", error);
    process.exit(1);
  }
};

module.exports = { sequelize, startDatabase };
