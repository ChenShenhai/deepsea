import React from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import UserNav from './../../modules/user-nav/index'
import './style.scss';

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

class SiderDemo extends React.Component {
  state = {
    collapsed: false,
    mode: 'inline',
  };
  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({
      collapsed,
      mode: collapsed ? 'vertical' : 'inline',
    });
  }
  render() {
    return (
      <div className="app-work">
        <Layout className="app-work-container">
          <UserNav />
          <Layout>
            <Sider width={160} style={{ background: '#fff' }}>
              <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%' }}
              >
                <SubMenu key="sub1" title={<span><Icon type="user" />我的管理</span>}>
                  <Menu.Item key="1">信息设置</Menu.Item>
                  <Menu.Item key="2">密码设置</Menu.Item>
                  <Menu.Item key="3">我的权限</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" title={<span><Icon type="laptop" />操作</span>}>
                  <Menu.Item key="5">发布文章</Menu.Item>
                  <Menu.Item key="6">文章列表</Menu.Item>
                  <Menu.Item key="7">相册管理</Menu.Item>
                  <Menu.Item key="8">文章统计</Menu.Item>
                </SubMenu>
                <SubMenu key="sub3" title={<span><Icon type="notification" />其他</span>}>
                  <Menu.Item key="9">option9</Menu.Item>
                  <Menu.Item key="10">option10</Menu.Item>
                  <Menu.Item key="11">option11</Menu.Item>
                  <Menu.Item key="12">option12</Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Layout style={{ padding: '0 24px 24px' }}>
              <Breadcrumb style={{ margin: '12px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
              </Breadcrumb>
              <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
                Content
              </Content>
              <Footer style={{ textAlign: 'center' }}>
                Ant Design ©2016 Created by Ant UED
              </Footer>
            </Layout>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default SiderDemo