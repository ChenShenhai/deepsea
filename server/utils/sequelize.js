const Sequelize = require('sequelize');
const configMysql = require("./../configs/config.mysql");


const sequelize = new Sequelize(
  configMysql.database, 
  configMysql.username, 
  configMysql.password, 

  {
    host: configMysql.host,
    dialect: 'mysql',
    pool: {
      max: 100,
      min: 0,
      idle: 10000
    },
    // logging: false,
  }
);

module.exports = sequelize;