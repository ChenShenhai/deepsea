import Router from  'koa-router';
import index from '../controller/index.mjs';
const router = Router(); 

export default router
  .get('/', index);

