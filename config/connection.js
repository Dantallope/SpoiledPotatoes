/* This will initialize sequelize and use the data put in the .env file, so if the code is working for others but not for you, you may need to fill out your .env file ;) */
const Sequelize = require('sequelize');
require('dotenv').config();
const PORT = process.env.PORT || 3001;


const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
      port: PORT
    }
  );

module.exports = sequelize;
