const validator = require('validator');
const userModel = require('./../models/user-info');
const userCode = require('./../codes/user');

const user = {

  async create( user ) {
    let result = await userModel.create(user);
    return result;
  },

  getAllUser( options ) {
    return userModel.getAllUser( options );
  },


  async getExistOne( formData ) {
    let resultData = await userModel.getExistOne({
      'email': formData.email,
      'name': formData.userName
    });
    return resultData;
  },

  async signIn( formData ) {
    let resultData = await userModel.getOneByUserNameAndPassword({
      'password': formData.password,
      'name': formData.userName});
    return resultData;
  },

  async getUserInfoByUserName( userName ) {
    
    let resultData = await userModel.getUserInfoByUserName( userName ) || {};
    let userInfo = {
      // id: resultData.id,
      email: resultData.email,
      userName: resultData.name,
      detailInfo: resultData.detail_info,
      createTime: resultData.create_time
    };
    return userInfo;
  },

  validatorSignUp( userInfo ) {
    let result = {
      success: false,
      message: '',
    };

    if ( /[a-z0-9\_\-]{6,16}/.test(userInfo.userName) === false ) {
      result.message = userCode.ERROR_USER_NAME;
      return result;
    }
    if ( !validator.isEmail( userInfo.email ) ) {
      result.message = userCode.ERROR_EMAIL;
      return result;
    }
    if ( !/[\w+]{6,16}/.test( userInfo.password )  ) {
      result.message = userCode.ERROR_PASSWORD;
      return result;
    }
    if ( userInfo.password !== userInfo.confirmPassword ) {
      result.message = userCode.ERROR_PASSWORD_CONFORM;
      return result;
    }

    result.success = true;

    return result;
  }

};

module.exports = user;
