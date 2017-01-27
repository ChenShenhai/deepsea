const router = require('koa-router')()
const user = require('./../controllers/user-info')

module.exports = router.get('/404', async ( ctx )=>{
  ctx.body = '404 page!';
})