import Router from  'koa-router';
import {renderPostItem} from './../controller/post.mjs';
 
const router = Router();
const routers = router
  .get('/item/:id', renderPostItem);  
  
export default routers;
