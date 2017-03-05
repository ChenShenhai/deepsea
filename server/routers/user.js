const router = require('koa-router')();
const userInfoController = require('./../controllers/user-info');

module.exports = router.get('/', async ( ctx )=>{
  ctx.body = 'user page';
});