import React from 'react';
import UserInfoBase from './../modules/user-info-base';
import UserInfoAvatar from './../modules/user-info-avatar';
import Request from './../../../utils/request';
import UtilTool from './../../../utils/tool';
import { getUserInfo } from './../apis/user-info'

class User extends React.Component {

  constructor() {
    super();
    this.state = {
      userInfo: {},
    }
  }

  async componentDidMount() {
    let userInfo = await getUserInfo();
    this.setState({
      userInfo,
    })
  }


  render () {
    return (
      <div className="dashboard-user-info">
        <div className="dashboard-user-container">
          <div className="dashboard-user-info-base">
            <UserInfoBase userInfo={this.state.userInfo} />
          </div>
          <div className="dashboard-user-info-avatar">
            <UserInfoAvatar />
          </div>
        </div>
      </div>
    )
  }
}

export default User;
