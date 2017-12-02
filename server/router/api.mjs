import Router from  'koa-router';
import {postList, postItem} from './../controller/post.mjs';
// import Post from './../controller/post.mjs'
const router = Router();

const routers = router
  .get('/post/list', async (ctx, next) => {
    ctx.body = await postList(ctx.params);
  })
  .get('/post/item/:id', async (ctx, next) => {
    ctx.body = await postItem(ctx.params);
  });



  
export default routers;
