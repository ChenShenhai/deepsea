const registerFilterRouters = {
  '/api/user/getUserInfo.json': { needLogin: true, isApi: true},
  '/work': { needLogin: true, }
};

function isLogin( ctx ) {
  let session = ctx.session;
  let _isLogin = false;
  if ( session && session.isLogin === true ) {
    _isLogin = true;
  }
  return _isLogin;
}

module.exports = function () {
  return async function ( ctx, next ) {
    let registerRouter = registerFilterRouters[ctx.path];
    let canNext = true;
    if ( registerRouter ) {
      if ( registerRouter.needLogin === true ) {
        if ( isLogin( ctx ) !== true ) {
          canNext = false;

          if ( registerRouter.isApi === true ) {
            ctx.body = {
              success: false,
              code: 'ERROR_NO_LOGIN'
            };
          } else {
            ctx.redirect('/user/sign');
          }
          
        }
      }
    }

    if ( canNext === true ) {
      await next();
    }
  };
};