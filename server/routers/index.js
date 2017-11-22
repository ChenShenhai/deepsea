const router = require('koa-router')();

const home = require('./home'); 
const api = require('./api'); 
const page = require('./page');
const test = require('./test');

router.use('/', home.routes(), home.allowedMethods()); 
router.use('/api', api.routes(), api.allowedMethods()); 
router.use('/page', page.routes(), page.allowedMethods());

// TODO
router.use('/test', test.routes(), test.allowedMethods());

module.exports = router;


