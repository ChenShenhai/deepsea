import path from 'path';
import process from 'process';
import Koa from 'koa';
import convert from 'koa-convert';
import views from 'koa-views';
import koaLogger from 'koa-logger'; 
import RouterFilter from './middleware/router-filter.mjs';  
import koaStatic from 'koa-static'; 
import routers from './router/index.mjs';

const app = new Koa(); 
const _DIRNAME_SERVER = path.join(process.cwd(), 'server'); 

// dev logger
app.use(koaLogger());

// static source
app.use(koaStatic(
  path.join(process.cwd()),
  'static'
));

app.use(koaStatic(
  path.join(process.cwd()),
  'themes'
));

// init view render
app.use(views(path.join(_DIRNAME_SERVER, './view'), {
  extension: 'ejs'
}));

// router filter
app.use(RouterFilter());

// init router
app.use(routers.routes()).use(routers.allowedMethods());

// listen port
app.listen(3000);
console.log('the server is start at port 3000');
