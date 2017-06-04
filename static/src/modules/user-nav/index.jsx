import React from 'react';
import Layout from 'antd/lib/layout';
import Menu from 'antd/lib/menu';
import Texts from '@@texts/index';
import './style.less';

const { Header } = Layout;

const userNavLinkMap = {
  '/dashboard': 'dashboard',
  '/work': 'work',
  '/me': 'me',
};

class UserNav extends React.Component {  
  state = {
    navSelectedKey: 'work'
  };

  componentWillMount() {
    let pathname = window.location.pathname;
    let navSelectedKey = userNavLinkMap[pathname] || '';
    this.setState({
      navSelectedKey: navSelectedKey,
    });
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
          <Menu.Item key="dashboard"><a href="/dashboard">{Texts.page.HEADER_NAV_DASHBOARD}</a></Menu.Item>
          <Menu.Item key="work"><a href="/work">{Texts.page.HEADER_NAV_WORK}</a></Menu.Item>
          <Menu.Item key="me"><a href="/me">{Texts.page.HEADER_NAV_ME}</a></Menu.Item>
          
          <Menu.Item key="logout"
            style={{
              float: 'right',
            }}>
            <a href="/user/logout">{Texts.page.HEADER_NAV_LOGOUT}</a>
          </Menu.Item>
        </Menu>
      </Header>
    );
  }
}

export default UserNav;