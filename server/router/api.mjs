import Router from  'koa-router'; 
import {getOneById, getListByPage} from './../controller/post.mjs';

const router = Router();

const routers = router
  .get('/post/list/:size/:page', async (ctx, next) => {
    ctx.body = await getListByPage(ctx.params);
  })
  .get('/post/item/:id', async (ctx, next) => {
    ctx.body = await getOneById(ctx.params.id);
  }); 



export default routers;
