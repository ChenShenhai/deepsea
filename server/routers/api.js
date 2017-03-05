const router = require('koa-router')();
const userInfoController = require('./../controllers/user-info');
const blogCategoryController = require('./../controllers/blog-category');
const blogContentController = require('./../controllers/blog-content');
const pictureController = require('./../controllers/picture');
const pictureAlbumController = require('./../controllers/picture-album');
const pictureContentController = require('./../controllers/picture-content');

const routers = router
  .get('/user/getUserInfo.json', userInfoController.getLoginUserInfo)
  .post('/user/signIn.json', userInfoController.signIn)
  .post('/user/signUp.json', userInfoController.signUp)

  .post('/blogCategory/add.json', blogCategoryController.addCategory)
  .get('/blogCategory/getList.json', blogCategoryController.getListByPage)

  .post('/blogContent/add.json', blogContentController.addContent)
  .post('/blogContent/update.json', blogContentController.updateContent)
  .get('/blogContent/getList.json', blogContentController.getListByPage)
  .get('/blogContent/getOneById.json', blogContentController.getOneById)

  .post('/picture/upload.json', pictureController.upload)
  .post('/picture/addAlbum.json', pictureAlbumController.addAlbum)
  .post('/picture/addContent.json', pictureContentController.addContent)

  .get('/picture/getAlbumList.json', pictureAlbumController.getListByPage)
  .get('/picture/getContentList.json', pictureContentController.getListByPage);

  
module.exports = routers;
