/* This will initialize sequelize and use the data put in the .env file, so if the code is working for others but not for you, you may need to fill out your .env file ;) */
const Sequelize = require('sequelize');
require('dotenv').config();
const PORT = process.env.PORT || 3001;


const sequelize = new Sequelize(
  'heroku_995c8fbe9ba5009',
  'b5a7610b3de5a9',
  '9cf2ffdc',
  {
    host: 'us-cdbr-iron-east-02.cleardb.net',
    dialect: 'mysql',
      port: PORT
    }
  );

module.exports = sequelize;
