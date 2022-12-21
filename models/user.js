const { Model, DataTypes } = require('sequelize') ;

const sequelize = require('../config/connection');

class User extends Model {} 

User.init(
    {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        sequelize,
    },
);

module.exports = User