import Router from  'koa-router';
const router = Router();

export default router.get('/404', async ( ctx )=>{
  ctx.body = '404 page!';
});