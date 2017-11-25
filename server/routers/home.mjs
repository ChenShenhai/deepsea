import Router from  'koa-router';
import index from '../controllers/index.mjs';
const router = Router(); 

export default router
  .get('/', index);

