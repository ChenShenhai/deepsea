import React from 'react';
import UserInfoIndex from './../modules/user-info-index';

class User extends React.Component {
  render () {
    return (
      <div className="dashboard-user-info">
        <div className="dashboard-user-container">
         <UserInfoIndex />
        </div>
      </div>
    )
  }
}

export default User;