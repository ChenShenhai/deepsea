import React from 'react';
import ReactDOM from 'react-dom';
import Layout from 'antd/lib/layout';
import Menu from 'antd/lib/menu';
import FormGroup from '@@modules/sign/index.jsx'; 
import 'antd/dist/antd.min.css';
import './style.less';

const { Content, Footer } = Layout;

class App extends React.Component {
  render() {
    return (
      <Layout className="layout page-layout">
        <Content className="page-content" >
          <div className="page-form-group">
            <FormGroup />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2016 Created by Ant UED
        </Footer>
      </Layout>
    );
  }
}


export default App;