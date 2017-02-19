import React from 'react';
import { Link } from 'react-router';
import UserIndexView from './../modules/user-info-index';

class User extends React.Component {

  render () {
    let content = this.props.children || <UserIndexView/>;

    return (
      <section className="dashboard-container">
        <section className="dashboard-left">
          <ul className="list-group">
            <li className="list-group-item">
              <Link activeClassName="active" to="/user/index">index</Link>
            </li>
            <li className="list-group-item">
              <Link activeClassName="active" to="/user/info">base info</Link>
            </li>
            <li className="list-group-item">
              <Link activeClassName="active" to="/user/message">message</Link>
            </li>
          </ul>
        </section>
        <section className="dashboard-main">
          {content}
        </section>
      </section>
    )
  }
}

export default User;