const router = require('koa-router')();

const routers = router
  .get('/', async ( ctx ) => {
    const title = 'me';
    await ctx.render('me', {
      title,
    });
  });


module.exports = routers;