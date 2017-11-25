import Router from  'koa-router';
import {postList} from './../controller/post.mjs';
// import Post from './../controller/post.mjs'
const router = Router();

const routers = router
  .get('/post/:id', async (ctx, next) => {
    ctx.body = await postList(ctx.params);
  });



  
export default routers;
