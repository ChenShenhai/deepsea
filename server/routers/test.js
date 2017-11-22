const router = require('koa-router')(); 

module.exports = router.get('/001', async ( ctx )=>{
  await ctx.render('test', {});
}); 
