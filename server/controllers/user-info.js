const userInfoService = require('./../services/user-info');
const userCode = require('./../codes/user');

module.exports = {

  
  /**
   * @param  {} ctx
   */
  async signIn( ctx ) {
    let formData = ctx.request.body;
    let result = {
      success: false,
      message: '',
      data: null
    };

    let userResult = await userInfoService.signIn( formData );
    
    if ( formData && userResult && formData.userName === userResult.name ) {
      result.success = true;
    } else {
      result.code = 'FAIL_USER_NAME_OR_PASSWORD_ERROR';
    }

    if ( formData.source === 'form' && result.success === true ) {
      let session = ctx.session;
      session.isLogin = true;
      session.userName = userResult.name;
      session.userId = userResult.id;

      ctx.redirect('/work');
    } else {
      ctx.body = result;
    }
  },

  
  /**
   * @param  {} ctx
   */
  async signUp( ctx ) {
    let formData = ctx.request.body;
    let result = {
      success: false,
      message: '',
      data: null
    };

    let validateResult = userInfoService.validatorSignUp( formData );

    if ( validateResult.success === false ) {
      result = validateResult;
      ctx.body = result;
      return;
    }

    let existOne  = await userInfoService.getExistOne(formData);
    // console.log( existOne );

    if ( existOne  ) {
      if ( existOne.name === formData.userName ) {
        result.code = 'FAIL_USER_NAME_IS_EXIST';
        ctx.body = result;
        return;
      }
      if ( existOne .email === formData.email ) {
        result.code = 'FAIL_EMAIL_IS_EXIST';
        ctx.body = result;
        return;
      }
    }


    let userResult = await userInfoService.create({
      email: formData.email,
      password: formData.password,
      name: formData.userName,
      createTime: new Date().getTime(),
      level: 1,
    });


    if ( userResult && userResult.name === formData.userName) {
      result.success = true;
    } else {
      result.message = userCode.ERROR_SYS;
    }

    ctx.body = result;
  },

  async isExist( ctx ) {
    let queryData = ctx.request.body;
    ctx.body = queryData;
  },

  async getLoginUserInfo( ctx ) {
    let session = ctx.session;
    let isLogin = session.isLogin;
    let userId = session.userId;
    let result = {
      success: false,
      message: '',
      data: null,
    };
    if ( isLogin === true && userId ) {
      let userInfo = await userInfoService.getUserInfoByUserId( userId );
      if ( userInfo ) {
        result.data = userInfo;
        result.success = true;
      } else {
        result.code = 'FAIL_USER_NO_LOGIN';
      }
    } else {

    }

    ctx.body = result;
  },

  validateLogin( ctx ) {
    let result = {
      success: false,
      message: '',
      data: null,
      code: 'FAIL_USER_NO_LOGIN',
    }; 
    let session = ctx.session;
    if( session && session.isLogin === true  ) {
      result.success = true;
      result.message = '';
      result.code = '';
      result.data = loginInfo;
    }
    return result;
  },


  // TODO
  /**
   * @param  {} ctx
   */
  getUserListByPage( ctx ) {
    
  },

  async updateUserInfo( ctx ) {
    let result = {success: false};
    if ( ctx.session.isLogin === true ) {
      let formData = ctx.request.body;
      formData.id= ctx.session.userId;
      
      let userResult = await userInfoService.updateUserInfo(formData);
      result.success = true;
      result.data = userResult;
    }  
    ctx.body = result;
  },

  async updatePassword( ctx ) {
    let result = {success: false, code: 'NO_LOGIN'};
    if ( ctx.session.isLogin === true ) {
      let formData = ctx.request.body;
      formData.id= ctx.session.userId;
      
      let userResult = await userInfoService.updatePassword(formData);
    }  
    ctx.body = userResult;
  } 

};
