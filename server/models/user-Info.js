const Sequelize = require('sequelize');
const sequelize = require('./../utils/sequelize');

const User = sequelize.define('user_info', {
  id: {
     type: Sequelize.INTEGER, 
     autoIncrement: true,
     primaryKey: true
  },
  name: {
    type: Sequelize.STRING,
    unique: true,
  },
  nick: {
    type: Sequelize.STRING,
    unique: true,
  },
  email:{
    type: Sequelize.STRING,
    unique: true,
  }, 
  password:{
    type: Sequelize.STRING
  },
  detail_info:{
    type: Sequelize.STRING
  }, 
  create_time:{
    type: Sequelize.STRING
  }, 
  update_time:{
    type: Sequelize.STRING
  },  
  level: {
     type: Sequelize.INTEGER
  },
}, {
  // freezeTableName: true,
  tableName: 'user_info',
  timestamps: false,
});

const UserInfo = {

  create( model ) {
    return new Promise(( resolve, reject ) => {
        User
          .create({
            name: model.name,
            email: model.email,
            password: model.password,
            detail_info: model.detail_info || '{}',
            create_time: model.createTime,
            update_time: model.createTime,
            level: 0,
          })
          .then(function() {
            User
              .findOne({
                where: {name: model.name, email: model.email}
              }).then( resolve, reject );
          });
    });
  },
 
  getListByPage( options ) {
    return new Promise(( resolve, reject ) => {
      User.findAndCountAll({
        offset: 1 ,
        limit: 10,
        attributes: [
          'id',
          'name',
          'email',
          [sequelize.col('detail_info'), 'detailInfo'],
          [sequelize.col('create_time'), 'createTime'],
          [sequelize.col('update_time'), 'updateTime'],
        ],
      }).then(resolve, ( err ) => {
        console.log( err );
        reject(false);
      });
    });
  },

  getExistOne( options ) {
    // console.log('getExistOne.options=', options);
    return new Promise(( resolve, reject ) => {
      User.findOne({
        where: {
          $or: [
            { email: options.email },
            { name: options.name }
          ]
        },
        attributes: [
          'id',
          'name',
          'email',
          [sequelize.col('detail_info'), 'detailInfo'],
          [sequelize.col('create_time'), 'createTime'],
          [sequelize.col('update_time'), 'updateTime'],
        ],
      }).then( resolve, ( err ) => {
        console.log( err );
        reject(false);
      });
    });
  },

  getOneByUserNameAndPassword( options ) {
    console.log('getOneByUserNameAndPassword.options=', options);
    return new Promise((resolve, reject) => {
      User.findOne({
        where: {
          $and: [
            { name: options.name, },
            { password: options.password }
          ]
        },
        attributes: [
          'id',
          'name',
          'email',
          [sequelize.col('detail_info'), 'detailInfo'],
          [sequelize.col('create_time'), 'createTime'],
          [sequelize.col('update_time'), 'updateTime'],
        ]
      }).then(( result )=>{
        // console.log( 'resolve=', result )
        resolve( result );
      }, ( result )=>{
        // console.log( 'reject=', result )
        reject( result );
      });
    });
  },

  getUserInfoByUserName( userName )  {
    return new Promise((resolve, reject) => {
      User.findOne({
        where: {
          name: options.name
        }
      }).then( resolve, reject );
    });
  }


};


module.exports = UserInfo;
