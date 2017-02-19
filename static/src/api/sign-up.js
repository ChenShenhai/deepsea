import Tools from './../utils/tool'
import Request from './../utils/request'
import validator from 'validator'

const signUp = ( userInfo ) => {

  let validateResult = validatorSignUp( userInfo )

  if ( validateResult.success === false ) {
    return validateResult
  }

  let _this = this;

  Request.post({
    url: '/api/user/signUp.json',
    data: userInfo,
    success: ( result ) => {
      if ( result && result.success === true  ) {
        window.location.href = '/admin?signUpSuccess=true'
      } else {
        _this.setState({ signUpAlert: {
          type: 'danger',
          context: result.message,
        }})
      }
    },
    error: ( err ) => {
      console.log( err )
      _this.setState({ signUpAlert: {
        type: 'danger',
        context: '系统繁忙！',
      }})
    }
  })

}

const validatorSignUp = ( userInfo ) => {
  let result = {
    success: false,
    message: '',
  }

  if ( /[a-z0-9\_\-]{6,16}/.test(userInfo.userName) === false ) {
    result.message = '用户名格式为6-16位的小写字母，包括-、_'
    return result
  }
  if ( !validator.isEmail( userInfo.email ) ) {
    result.message = '请输入正确的邮箱地址'
    return result
  }
  if ( !/[\w+]{6,16}/.test( userInfo.password )  ) {
    result.message = '密码长度应该为6-16'
    return result
  }
  if ( userInfo.password !== userInfo.confirmPassword ) {
    result.message = '两次密码不一致'
    return result
  }

  result.success = true

  return result
}


export default signUp