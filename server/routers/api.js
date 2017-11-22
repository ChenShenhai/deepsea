const router = require('koa-router')();

const routers = router
  .get('/', async (ctx, next) => {
    ctx.body = {
      'api': 'hello world'
    };
  })

  .get('/post/1.json', async ( ctx, next ) => {
    ctx.body = {
      hello: 'world'
    }
  })

  
module.exports = routers;
