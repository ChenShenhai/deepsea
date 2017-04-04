import React from 'react';
import { Link } from 'react-router';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import UserNav from './../../modules/user-nav/index';

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

class Main extends React.Component {
  state = {
     
  }

  componentWillMount() {
    
  }
  
  render() {
    return (
      <div className="app-dashboard">
        <Layout className="app-dashboard-container">
          <UserNav />
          <Layout>
            <Sider width={160} style={{ background: '#fff' }}>
              <Menu
                mode="inline"
                defaultSelectedKeys={['7']}
                defaultOpenKeys={['sub2']}
                style={{ height: '100%' }}
              >
                <SubMenu key="user" title={<span><Icon type="user" />用户管理</span>}>
                  <Menu.Item key="1">
                    <Link className="nav-link" activeClassName="active" to="user-list">用户列表</Link>
                  </Menu.Item>
                  <Menu.Item key="2">
                    <Link className="nav-link" activeClassName="active" to="user-authority">权限管理</Link>
                  </Menu.Item>
                  <Menu.Item key="3">
                    <Link className="nav-link" activeClassName="active" to="user-super">超级管理员</Link>
                  </Menu.Item>
                </SubMenu>
                <SubMenu key="setting" title={<span><Icon type="laptop" />平台配置</span>}>
                  <Menu.Item key="setting-sys-email">系统邮箱</Menu.Item>
                  <Menu.Item key="setting-front-theme">前台主题</Menu.Item>
                  <Menu.Item key="setting-system-log">系统日志</Menu.Item>
                </SubMenu>
                {/*<SubMenu key="sub3" title={<span><Icon type="notification" />subnav 3</span>}>
                  <Menu.Item key="9">option9</Menu.Item>
                  <Menu.Item key="10">option10</Menu.Item>
                  <Menu.Item key="11">option11</Menu.Item>
                  <Menu.Item key="12">option12</Menu.Item>
                </SubMenu>*/}
              </Menu>
            </Sider>
            <Layout style={{ padding: '0 24px 24px' }}>
              <Breadcrumb style={{ margin: '12px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
              </Breadcrumb>
              <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
                {this.props.children}
              </Content>
              <Footer style={{ textAlign: 'center' }}>
                demo ©2016 Created by demo
              </Footer>
            </Layout>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default Main;