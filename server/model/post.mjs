import Sequelize from 'sequelize';
import sequelize from './../util/sequelize.mjs';
import randomStr from './../util/random-str.mjs'; 
const Op = Sequelize.Op;
const commonAttr= [
  'id',
  'uuid',
  'title',
  'content',
  'labels',
  'extention',
  [sequelize.col('user_name'), 'userName'],
  [sequelize.col('user_avatar'), 'userAvatar'],
  [sequelize.col('comments_count'), 'commentsCount'], 
  [sequelize.col('created_at'), 'createdAt'],
  [sequelize.col('updated_at'), 'updatedAt']
];

const Post = sequelize.define('post', {
  id: {
     type: Sequelize.INTEGER, 
     autoIncrement: true,
     primaryKey: true,
     unique: true,
  },
  uuid: {
    type: Sequelize.STRING, 
    unique: true,
  },
  title: {
    type: Sequelize.STRING, 
  },
  content:{
    type: Sequelize.STRING, 
  },  
  labels:{
    type: Sequelize.STRING, 
  }, 
  extention:{
    type: Sequelize.STRING, 
  }, 
  user_name:{
    type: Sequelize.STRING, 
  }, 
  user_avatar:{
    type: Sequelize.STRING, 
  },
  comments_count:{
    type: Sequelize.INTEGER, 
  },
  created_at:{
    type: Sequelize.STRING
  }, 
  updated_at:{
    type: Sequelize.STRING
  },  
  
}, {
  // freezeTableName: true,
  tableName: 'post',
  timestamps: false,
});

function parsePost( model ) {
  return {
    title: model.title,
    uuid: randomStr(),
    content: model.content || '', 
    user_name: model.userName,
    user_avatar: model.userAvatar,
    comments_count: model.commentsCount,
    created_at: model.createdAt,
    updated_at: model.updatedAt,
    labels: model.labels,
    extention: model.extention
  };
}

// export const bulkCreate = function( list ) {
//   let _list = [];
//   for ( let[_index, _val] of list.entries() ) {
//     _list.push(parsePost( _val ));
//   } 
//   return new Promise((resolve, reject) => {
//     Post.bulkCreate(_list).then(function() { // Notice: There are no arguments here, as of right now you'll have to...
//       // return User.findAll();
//     }).then(function(users) {
//       console.log(users); // ... in order to get the array of user objects
//     });
//   });
// };

export const create = function( model ) {
  let post = parsePost(model);
  return new Promise(( resolve, reject ) => {
    Post
    .create(post)
    .then(() => {
      Post
        .findOne({ 
          where: {
            uuid: {
              [Op.eq]: post.uuid
            }
          }
        }).then( resolve, reject );
    });
  });
};


export const getOneById = function(id) {
  return new Promise(( resolve, reject ) => {
    Post
      .findOne({ 
        attributes: commonAttr,
        where: {
          id: {
            [Op.eq]: id
          }
        }
      }).then( resolve, reject );
  });
};

export default {
   
  // getExistOne( name ) {
  //   return new Promise((resolve, reject) => {
  //     ArticleCategory
  //       .findOne({
  //         where: {name: name}
  //       }).then( resolve, reject );
  //   });
  // },

  // getListByPage( options ) {
  //   options = options || {};

  //   let pageCurrent = options.pageCurrent * 1 || 1;
  //   let pageSize = options.pageSize * 1 || 10;

  //   return new Promise(( resolve, reject ) => {
  //     ArticleCategory.findAndCountAll({
  //       offset: ( pageCurrent - 1 ) * pageSize,
  //       limit: pageSize,
  //       attributes: commonAttr,
  //     }).then(resolve, ( err ) => {
  //       console.log( err );
  //       reject(false);
  //     });
  //   });
  // },

  
};