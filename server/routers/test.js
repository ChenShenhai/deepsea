const router = require('koa-router')()
const user = require('./../controllers/user-info')

module.exports = router.get('/001', async ( ctx )=>{
  console.log( ctx.query )
  ctx.body = {'ok':true}
}).get('/002', async ( ctx )=>{
  ctx.body = 'test page:' + ctx.session.count;
})
