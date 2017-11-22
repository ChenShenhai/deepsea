const path = require('path');
const Koa = require('koa');
const convert = require('koa-convert');
const views = require('koa-views');
const koaStatic = require('./middlewares/static');
const bodyParser = require('koa-bodyparser');
const koaLogger = require('koa-logger');
const session = require('koa-session-minimal'); 
const RouterFilter = require('./middlewares/router-filter'); 
const routers = require('./routers/index');

const app = new Koa();

 

// dev logger
app.use(convert(koaLogger()));

// body parse
app.use(bodyParser());

// static source
app.use(convert(koaStatic(
  path.join(__dirname , './../static'),
  'static'
)));

app.use(convert(koaStatic(
  path.join(__dirname , './../themes'),
  'themes'
)));

// init view render
app.use(views(path.join(__dirname, './views'), {
  extension: 'ejs'
}));

// router filter
app.use(RouterFilter());

// init router
app.use(routers.routes()).use(routers.allowedMethods());

// listen port
app.listen(3000);
console.log('the server is start at port 3000');
