const Sequelize = require('sequelize');
const config = require('./config').database;

const database = new Sequelize(
  config.DATABASE,
  config.USERNAME,
  config.PASSWORD , {
    host: config.HOST,
    dialect: 'mysql',
    pool: {
      max: 20,
      min: 0,
      idle: 50000
    },
    logging: false,
  });

module.exports = database;
