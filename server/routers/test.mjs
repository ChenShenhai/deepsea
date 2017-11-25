import Router from  'koa-router';
const router = Router();

export default router.get('/001', async ( ctx )=>{
  await ctx.render('test', {});
}); 
