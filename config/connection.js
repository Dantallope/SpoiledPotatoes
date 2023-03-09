/* This will initialize sequelize and use the data put in the .env file, so if the code is working for others but not for you, you may need to fill out your .env file ;) */
const Sequelize = require('sequelize');
require('dotenv').config();
const PORT = process.env.PORT || 3001;


const sequelize = new Sequelize(
  process.env.HOST,
  process.env.PASS,
  process.env.DB,
  {
    host: 'us-cdbr-iron-east-02.cleardb.net',
    dialect: 'mysql',
      port: PORT
    }
  );

module.exports = sequelize;
