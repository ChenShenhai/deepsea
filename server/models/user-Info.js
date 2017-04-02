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

    // console.log('create.model=', model);

    return new Promise(( resolve, reject ) => {
        User
          .create({
            name: model.name,
            email: model.email,
            detail_info: model.detail_info || '{}',
            create_time: model.create_time,
            update_time: model.create_time,
            level: 0,
          })
          .then(function() {
            User
              .findOne({
                where: {name: model.name, email: model.email}
              }).then( resolve, reject )
          })
    })
  },
 
  getAllUser () {
    return new Promise(( resolve, reject ) => {
        User.findAndCountAll({
        offset: 10,
        limit: 2
      }).then(resolve, reject);
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
          'detail_info',
          'level',
          'create_time',
          'update_time',
          [sequelize.col('create_time'), 'createTime']
        ],
      }).then( resolve, reject );
    })
  },

  getOneByUserNameAndPassword( options ) {
    // console.log('getOneByUserNameAndPassword.options=', options);
    return new Promise((resolve, reject) => {
      User.findOne({
        where: {
          name: options.name,
          password: options.password
        },
        attributes: [
          'name',
          'email'
        ]
      }).then(( result )=>{
        // console.log( 'resolve=', result )
        resolve( result )
      }, ( result )=>{
        // console.log( 'reject=', result )
        reject( result )
      })
    })
  },

  getUserInfoByUserName( userName )  {
    return new Promise((resolve, reject) => {
      User.findOne({
        where: {
          name: options.name
        }
      }).then( resolve, reject );
    })
  }


}


module.exports = UserInfo;
