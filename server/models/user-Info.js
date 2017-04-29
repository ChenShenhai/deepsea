const Sequelize = require('sequelize');
const sequelize = require('./../utils/sequelize');
const commonAttr= [
  'id',
  'name',
  'nick',
  'gender',
  'email',
  'level',
  'status',
  [sequelize.col('detail_info'), 'detailInfo'],
  [sequelize.col('create_time'), 'createTime'],
  [sequelize.col('update_time'), 'updateTime'],
];

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
  status: {
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
          status: 1,
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
    options = options || {};

    let pageCurrent = options.pageCurrent * 1 || 1;
    let pageSize = options.pageSize * 1 || 10;

    return new Promise(( resolve, reject ) => {
      User.findAndCountAll({
        offset: ( pageCurrent - 1 ) * pageSize,
        limit: pageSize,
        attributes: commonAttr,
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
        attributes: commonAttr,
      }).then( resolve, ( err ) => {
        console.log( err );
        reject(false);
      });
    });
  },

  getOneByUserNameAndPassword( options ) {
    // console.log('getOneByUserNameAndPassword.options=', options);
    return new Promise((resolve, reject) => {
      User.findOne({
        where: {
          $and: [
            { name: options.name, },
            { password: options.password }
          ]
        },
        attributes: commonAttr
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
          name: userName
        },
        attributes: commonAttr
      }).then( resolve, reject );
    });
  },

  getUserInfoByUserId( userId )  {
    return new Promise((resolve, reject) => {
      User.findOne({
        where: {
          id: userId
        },
        attributes: commonAttr
      }).then( resolve, reject );
    });
  },

  updateUserInfo( userInfo ) {
    return new Promise(( resolve, reject ) => {
      User.update({
        name: userInfo.name,
        nick: userInfo.nick,
        email: userInfo.email,
      }, {
        where: {
          $and: {
            id: userInfo.id
          }
        }
      }).then( resolve, reject );
    });
  }


};


module.exports = UserInfo;
