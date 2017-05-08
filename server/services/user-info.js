const crypto = require('crypto');
const validator = require('validator');
const userModel = require('./../models/user-info');
const userCode = require('./../codes/user');

function hashPassword( inputStr ) {
  let hmac = crypto.createHmac('sha1', 'DEEP_SEA_KEY');
  let outputStr = hmac.update(inputStr).digest('hex');
  return outputStr;
}

function createUID() {
  let str1 = Math.random().toString(36).substr(2);
  let str2 = Math.random().toString(36).substr(2);
  let fullStr = str1 + str2;
  let uid = fullStr.substr(4, 16);
  return uid;
}


const user = {

  async create( user ) {
    user.password = hashPassword(user.password);
    user.uid = createUID();
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
      'password': hashPassword(formData.password), //formData.password,
      'name': formData.userName});
      // console.log('service.signIn', resultData);
    return resultData;
  },

  async getUserInfoByUserName( userName ) {
    let resultData = await userModel.getUserInfoByUserName( userName ) || {};
    return resultData;
  },

  async getUserInfoByUserId( userId ) {
    let resultData = await userModel.getUserInfoByUserId( userId ) || {};
    return resultData;
  },

  async getUserInfoByUid( uid ) {
    let resultData = await userModel.getUserInfoByUid( uid ) || {};
    return resultData;
  },

  validatorSignUp( userInfo ) {
    let result = {
      success: false,
      message: '',
    };

    if ( /[a-z0-9\_\-]{6,16}/.test(userInfo.userName) === false ) {
      result.code = 'ERROR_USER_NAME';
      return result;
    }
    if ( !validator.isEmail( userInfo.email ) ) {
      result.code = 'ERROR_EMAIL';
      return result;
    }
    if ( !/[\w+]{6,16}/.test( userInfo.password )  ) {
      result.code = 'ERROR_PASSWORD';
      return result;
    }
    if ( userInfo.password !== userInfo.confirmPassword ) {
      result.code = 'ERROR_PASSWORD_CONFORM';
      return result;
    }
    result.success = true;

    return result;
  },

  async getListByPage( options ) {
    let userList = await userModel.getListByPage(options); 
    return userList;
  },

  async updateUserInfo( userInfo ) {
    let userResult = await userModel.updateUserInfo(userInfo);
    let result = false;
    if ( Array.isArray(userResult) && userResult.length === 1 
      && userResult[0] * 1 >= 0) {
      result = true;
    }
    return result;
  },

  async updatePassword( userInfo ) {
    let result = {
      success: false,
      code: 'ERROR_SYS_BUSY',
    };
    userInfo.oldPassword = hashPassword(userInfo.oldPassword);
    userInfo.newPassword = hashPassword(userInfo.newPassword);
    if ( userInfo.oldPassword === userInfo.newPassword )  {
      result.code = 'FAIL_USER_SAME_PASSWORD';
    } else {
      let userData = await userModel.getOneByUserIdAndPassword({ id: userInfo.id, password: userInfo.oldPassword });
      if ( !userData ) {
        result.code = 'FAIL_USER_OLD_PASSWORD_ERROR';
      } else {
        let userResult = await userModel.updatePassword({ id: userInfo.id, password: userInfo.newPassword });
        if ( Array.isArray(userResult) && userResult.length === 1 
          && userResult[0] * 1 >= 0) {
          result.success = true;
          result.code = 'SUCCESS_USER_UPDATE_PASSWORD';
        } 
      }
    }
    
    return result;
  } 
};

module.exports = user;
