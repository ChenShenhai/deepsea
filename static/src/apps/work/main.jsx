import React from 'react';
import { Link } from 'react-router';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import UserNav from '@@modules/user-nav/index';
import UtilTool from '@@utils/tool';

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

class Main extends React.Component {
  state = {
    menuSelectedKey: 'my-info',
    menuOpenKey: 'my',
  }

  componentWillMount() {
    this.initMenuSelectedStatus();
  }

  initMenuSelectedStatus() {
    let hashName = UtilTool.getUrlHashName();
    let menuSelectedKey = hashName || '-';
    let menuOpenKey = menuSelectedKey.split('-')[0];

    if ( menuSelectedKey && menuOpenKey ) {
      this.setState({
        menuSelectedKey,
        menuOpenKey,
      });
    }
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
                defaultSelectedKeys={[this.state.menuSelectedKey]}
                defaultOpenKeys={[this.state.menuOpenKey]}
                style={{ height: '100%' }}
              >
                <SubMenu key="my" title={<span><Icon type="user" />我的管理</span>}>
                  <Menu.Item key="my-info">
                    <Link className="nav-link" activeClassName="active" to="my-info">信息设置</Link>
                  </Menu.Item>
                  <Menu.Item key="my-password">
                    <Link className="nav-link" activeClassName="active" to="my-password">密码管理</Link>
                  </Menu.Item>
                  <Menu.Item key="my-authority">
                    <Link className="nav-link" activeClassName="active" to="my-authority">我的权限</Link>
                  </Menu.Item>
                </SubMenu>
                {/*<SubMenu key="article" title={<span><Icon type="laptop" />文章管理</span>}>
                  <Menu.Item key="article-list">
                    <Link className="nav-link" activeClassName="active" to="article-list">文章列表</Link>
                  </Menu.Item>
                  <Menu.Item key="article-analysis">
                    <Link className="nav-link" activeClassName="active" to="article-analysis">数据分析</Link>
                  </Menu.Item>
                </SubMenu>
                <SubMenu key="resource" title={<span><Icon type="laptop" />资源管理</span>}>
                  <Menu.Item key="resource-picture">
                    <Link className="nav-link" activeClassName="active" to="resource-picture">图片管理</Link>
                  </Menu.Item>
                  <Menu.Item key="resource-analysis">
                    <Link className="nav-link" activeClassName="active" to="my-authority">数据分析</Link>
                  </Menu.Item>
                </SubMenu>*/}
              </Menu>
            </Sider>
            <Layout style={{ padding: '24px 24px' }}>
              {/*<Breadcrumb style={{ margin: '12px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
              </Breadcrumb>*/}
              <Content style={{ background: '#fff', padding: 24, margin: 0, overflow:'initial', }}>
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