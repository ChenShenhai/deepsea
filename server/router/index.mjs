import Router from  'koa-router';
import home from './home.mjs';
import api from './api.mjs';
import page from './page.mjs'; 

const router = Router();

router.use('/', home.routes(), home.allowedMethods()); 
router.use('/api', api.routes(), api.allowedMethods()); 
router.use('/page', page.routes(), page.allowedMethods());
 

export default router;


