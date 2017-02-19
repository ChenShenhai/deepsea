import React from 'react';
import ReactDOM from 'react-dom';
import validator from 'validator';
import TagController from './../components/tab-controller.jsx';
import Alert from './../components/alert.jsx';
import Tools from './../utils/tool';
import Request from './../utils/request';

class App extends React.Component {

  constructor() {
    super();


    let isSignUpSuccess = Tools.getUrlParam('signUpSuccess');
    let signInAlertType = '';
    let signInAlertContext = '';
    if ( isSignUpSuccess + '' === 'true' ) {
      signInAlertType = 'info';
      signInAlertContext = '注册成功！请登录！';
    }

    console.log( signInAlertType, signInAlertContext )

    this.state = {
      signUpAlert: {
        type: '',
        context: '',
      },
      signInAlert: {
        type: signInAlertType,
        context: signInAlertContext,
      }
    };
  }

  handleSignIn() {
    let signInfo = this.getSignInUserInfo();
    Request.post({
      url: '/api/user/signIn.json',
      data: signInfo,
      success: ( result ) => {
        console.log( result );
        if ( result && result.success === true ) {
          signInfo.source = 'form';
          Request.form({
            url: '/api/user/signIn.json',
            data: signInfo,
          })
        } else {
          this.setState({
            signInAlert: {
              type: 'danger',
              context: result.message || '',
            }
          });
        }
      },
      error: ( err ) => {
        console.log( err );
      }
    })
  }

  handleSignUp() {
    let userInfo = this.getSignUpUserInfo();
    let validateResult = this.validatorSignUp( userInfo );

    if ( validateResult.success === false ) {
      this.setState({
        signUpAlert: {
          type: 'danger',
          context: validateResult.message || '',
        }
      });
      return false;
    } else {
      this.setState({
        signUpAlert: {
          type: 'info',
          context: '',
        }
      })
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

  getSignInUserInfo() {
    let userName = ReactDOM.findDOMNode(this.refs.signInUserName).value.trim();
    let password = ReactDOM.findDOMNode(this.refs.signInPassword).value.trim();

    return {
      userName,
      password,
    }
  }

  getSignUpUserInfo() {
    let userName = ReactDOM.findDOMNode(this.refs.signUpUserName).value.trim();
    let email = ReactDOM.findDOMNode(this.refs.signUpEmail).value.trim();
    let password = ReactDOM.findDOMNode(this.refs.signUpPassword).value.trim();
    let confirmPassword = ReactDOM.findDOMNode(this.refs.signUpConfirmPassword).value.trim();

    return {
      userName,
      email,
      password,
      confirmPassword
    }
  }

  validatorSignUp( userInfo ) {
    let result = {
      success: false,
      message: '',
    }

    if ( /[a-z0-9\_\-]{6,16}/.test(userInfo.userName) === false ) {
      result.message = '用户名格式为6-16位的小写字母，包括-、_';
      return result;
    }
    if ( !validator.isEmail( userInfo.email ) ) {
      result.message = '请输入正确的邮箱地址';
      return result;
    }
    if ( !/[\w+]{6,16}/.test( userInfo.password )  ) {
      result.message = '密码长度应该为6-16';
      return result;
    }
    if ( userInfo.password !== userInfo.confirmPassword ) {
      result.message = '两次密码不一致';
      return result;
    }

    result.success = true;

    return result
  }


  render () {

    return (
      <div className="container">

        <div className="form-sign">
          <TagController data-active-index="1">

            <div name="登录">
              <div className="form-sign-content">
                <Alert
                  alertType={this.state.signInAlert.type}
                  alertContext={this.state.signInAlert.context} >
                </Alert>
                <label>登录名</label>
                <input
                  ref="signInUserName"
                  type="text"  className="form-control" placeholder="请输入登录名" />
                <label className="">密码</label>
                <input
                  ref="signInPassword"
                  type="password"  className="form-control" placeholder="请输入密码" />

                <button
                  onClick={this.handleSignIn.bind(this)}
                  className="btn btn-lg btn-primary btn-block" type="submit">登录</button>
              </div>
            </div>

            <div name="注册">
              <div className="form-sign-content">
                <Alert
                  alertType={this.state.signUpAlert.type}
                  alertContext={this.state.signUpAlert.context} >
                </Alert>

                <label>注册名</label>
                <input
                  ref="signUpUserName"
                  type="text" className="form-control" placeholder="请输入登录名" />
                <label>注册邮箱</label>
                <input
                  ref="signUpEmail"
                  type="text" className="form-control" placeholder="请输入邮箱地址" />
                <label>密码</label>
                <input
                  ref="signUpPassword"
                  type="password" className="form-control" placeholder="请输入密码" />
                <label>确认密码</label>
                <input
                  ref="signUpConfirmPassword"
                  type="password" className="form-control" placeholder="确认密码" />
                <button
                  onClick={this.handleSignUp.bind(this)}
                  className="btn btn-lg btn-primary btn-block" >注册</button>
              </div>
            </div>

          </TagController>

        </div>

      </div>
    )
  }
}

export default App;
