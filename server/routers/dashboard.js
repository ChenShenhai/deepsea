const router = require('koa-router')();
const controller = require('./../controllers/dashboard');

const routers = router
  .get('/', controller.indexPage)


module.exports = routers