import React from 'react';
import { Layout, Menu } from 'antd';
import './style.less';

const { Header } = Layout;

const userNavLinkMap = {
  '/dashboard': 'dashboard',
  '/work': 'work',
  '/me': 'me',
}

class UserNav extends React.Component {  
  state = {
    navSelectedKey: 'work'
  };

  componentWillMount() {
    let pathname = window.location.pathname;
    let navSelectedKey = userNavLinkMap[pathname] || '';
    this.setState({
      navSelectedKey: navSelectedKey,
    })
  }

  render() {
    return (
      <Header className="header page-mod-user-nav">
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={[this.state.navSelectedKey]}
        >
          <Menu.Item key="dashboard"><a href="/dashboard">操作台</a></Menu.Item>
          <Menu.Item key="work"><a href="/work">工作台</a></Menu.Item>
          <Menu.Item key="me"><a href="#">我</a></Menu.Item>
        </Menu>
      </Header>
    );
  }
}

export default UserNav