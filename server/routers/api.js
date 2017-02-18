const router = require('koa-router')()
const userInfoController = require('./../controllers/user-info')
const pictureController = require('./../controllers/picture')

const routers = router
  .get('/user/getUserInfo.json', userInfoController.getLoginUserInfo)
  .post('/user/signIn.json', userInfoController.signIn)
  .post('/user/signUp.json', userInfoController.signUp)

  
  .post('/picture/upload.json', pictureController.upload)
 
  
module.exports = routers
