import Router from  'koa-router';
import {postList, postItem} from './../controller/post.mjs';

// TODO: test 
import {initPost, initPostList, reset} from './../controller/init.mjs';

const router = Router();

const routers = router
  .get('/init/list/:size/:page', async (ctx, next) => {
    ctx.body = await initPostList(ctx.params);
  })
  .get('/init/item/:id', async (ctx, next) => {
    let result = await initPost(ctx.params);
    ctx.body = {
      result
    };
  })
  .get('/init/reset', async (ctx, next) => {
    let result = await reset(ctx.params);
    ctx.body = {
      result,
    };
  })
  .get('/post/list/:size/:page', async (ctx, next) => {
    ctx.body = await postList(ctx.params);
  })
  .get('/post/item/:id', async (ctx, next) => {
    ctx.body = await postItem(ctx.params);
  });



  
export default routers;
