import React from 'react';
import { Layout, Menu } from 'antd';

const { Header } = Layout;

class UserNav extends React.Component {
  
  state = {
    collapsed: false,
    mode: 'inline',
  };

  
  
  render() {
    return (
      <Header className="header">
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="1"><a href="/dashboard">操作台</a></Menu.Item>
          <Menu.Item key="2"><a href="/work">工作台</a></Menu.Item>
          <Menu.Item key="3"><a href="#">我</a></Menu.Item>
        </Menu>
      </Header>
    );
  }
}

export default UserNav