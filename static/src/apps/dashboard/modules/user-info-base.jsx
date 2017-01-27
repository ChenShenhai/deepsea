import React from 'react';
import ReactDOM from 'react-dom';
import userText from './../../../texts/user-text';

class UserInfoBase extends React.Component {
  constructor() {
    super();
    this.state = {
      userName: '',
      email: '',
    }
  }

  componentDidUpdate() {

    // console.log( `props=${this.props.userInfo.userName}`, `state=${this.state.userName}` )

    if ( this.props.userInfo.userName && !this.state.userName ) {
      this.setState({
        userName: this.props.userInfo.userName,
        email: this.props.userInfo.email,
      })
    }
  }

  handleInputUserName( event ) {
    this.setState({
      userName: event.target.value
    })
  }

  handleInputEmail( event ) {
    this.setState({
      email: event.target.value
    })
  }

  handleSubmitUserNameAndEmail() {
    let userName = ReactDOM.findDOMNode(this.refs.updateUserName).value.trim();
    let email = ReactDOM.findDOMNode(this.refs.updateEmail).value.trim();

    console.log(userName, email)
  }

  render() {
    return (
      <div>
        <div className="form-group">
          <label htmlFor="inputUserName">{userText.USER_INFO_LABEL_NAME}</label>
          <input type="text" className="form-control"
            ref="updateUserName"
            placeholder={userText.USER_INFO_PLACEHOLDER_NAME}
            value={this.state.userName}
            onChange={this.handleInputUserName.bind(this)} />
          <br/>
          <label htmlFor="inputEmail">{userText.USER_INFO_LABEL_EMAIL}</label>
          <input type="email" className="form-control"
            ref="updateEmail"
            placeholder={userText.USER_INFO_PLACEHOLDER_EMAIL}
            value={this.state.email}
            onChange={this.handleInputEmail.bind(this)} />
          <br/>
          <button type="submit" className="btn btn-secondary"
            onClick={this.handleSubmitUserNameAndEmail.bind(this)}>
            {userText.USER_INFO_BTN_SUBMIT}
          </button>
        </div>

        <hr/>

        <div className="form-group">
          <label htmlFor="inputPassword">{userText.USER_INFO_LABEL_PASSWORD}</label>
          <input type="password" className="form-control" placeholder={userText.USER_INFO_PLACEHOLDER_PASSWORD}/>
          <br/>
          <label htmlFor="inputConfirmPassword">{userText.USER_INFO_LABEL_CONFIRM_PASSWORD}</label>
          <input type="password" className="form-control" placeholder={userText.USER_INFO_PLACEHOLDER_CONFIRM_PASSWORD}/>
          <br/>
          <button type="submit" className="btn btn-secondary">{userText.USER_INFO_BTN_SUBMIT}</button>
        </div>

      </div>
    )
  }

};


export default UserInfoBase;
