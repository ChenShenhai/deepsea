import Sequelize from 'sequelize';
import configMysql from './../config/config.mysql.mjs'; 

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
    logging: false,
    operatorsAliases: false, // query条件别名
  }
);

export default sequelize;