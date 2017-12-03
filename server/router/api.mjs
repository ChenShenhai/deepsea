import Router from  'koa-router'; 
import {getOneById} from './../controller/post.mjs';

const router = Router();

const routers = router
  // .get('/post/list', async (ctx, next) => {
  //   ctx.body = await postList(ctx.params);
  // })
  .get('/post/item/:id', async (ctx, next) => {
    ctx.body = await getOneById(ctx.params.id);
  }); 



  
export default routers;
