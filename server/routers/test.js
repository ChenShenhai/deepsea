const router = require('koa-router')();
const user = require('./../controllers/user-info');

module.exports = router.get('/001', async ( ctx )=>{
  await ctx.render('test', {});
}).get('/002', async ( ctx )=>{
  ctx.body = 'test page:' + ctx.session.count;
});
