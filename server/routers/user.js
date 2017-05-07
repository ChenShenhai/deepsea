const router = require('koa-router')();
const userInfoController = require('./../controllers/user-info');

module.exports = router
  .get('/', async ( ctx )=>{
    ctx.body = 'user page';
  }).get('/sign', async ( ctx )=>{
    await ctx.render('sign', {
        title: 'sign',
      });
  }).get('/logout', userInfoController.logout);