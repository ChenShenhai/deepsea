import Request from '@@utils/request';
import validator from 'validator';
import Texts from '@@texts/index';

const signUpApi = async ( userInfo ) => {

  let validateResult = validatorSignUp( userInfo );

  if ( validateResult.success === false ) {
    return validateResult;
  }

  let result = Request.post({
    url: '/api/user/signUp.json',
    data: userInfo
  });

  return result;
};

const validatorSignUp = ( userInfo ) => {
  let result = {
    success: false,
    message: '',
  };

  if ( /[a-z0-9\_\-]{6,16}/.test(userInfo.userName) === false ) {
    result.message = Texts.code.ERROR_USER_NAME;
    return result;
  }
  if ( !validator.isEmail( userInfo.email ) ) {
    result.message = Texts.code.ERROR_EMAIL;
    return result;
  }
  if ( !/[\w+]{6,16}/.test( userInfo.password )  ) {
    result.message = Texts.code.ERROR_PASSWORD;
    return result;
  }
  if ( userInfo.password !== userInfo.confirmPassword ) {
    result.message = Texts.code.ERROR_PASSWORD_CONFORM;
    return result;
  }

  result.success = true;

  return result;
};


export  { signUpApi };