const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Todo = sequelize.define('todo', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});

module.exports = Todo;