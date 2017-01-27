const router = require('koa-router')()
const api = require('./../controllers/api')
const userInfoController = require('./../controllers/user-info')
const blogCategoryController = require('./../controllers/blog-category')
const blogContentController = require('./../controllers/blog-content')

const routers = router
  .get('/', api)
  .get('/user/getUserInfo.json', userInfoController.getLoginUserInfo)
  
  .post('/user/signIn.json', userInfoController.signIn)
  .post('/user/signUp.json', userInfoController.signUp)

  .post('/blogCategory/add.json', blogCategoryController.addCategory)
  .get('/blogCategory/getList.json', blogCategoryController.getListByPage)

  .post('/blogContent/add.json', blogContentController.addContent)
  .get('/blogContent/getList.json', blogContentController.getListByPage)
  .get('/blogContent/getOneById.json', blogContentController.getOneById)

module.exports = routers
