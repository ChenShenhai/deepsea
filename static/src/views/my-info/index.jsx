
import React from 'react';
// import { Form, Select, Input, Button, Row, Col, message } from 'antd';

import Form from 'antd/lib/form';
import Select from 'antd/lib/select';
import Input from 'antd/lib/input';
import Button from 'antd/lib/button';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import message from 'antd/lib/message';

import Request from '@@utils/request';
import Title from '@@components/title/index'; 
import Texts from '@@texts/index'; 
import Info from './info';
import Avator from './avator';


class View extends React.Component {

  state = {
    userInfo: {}
  }

  async componentWillMount() {
    let resultData = await Request.get({url: '/api/user/getUserInfo.json'});
    if ( resultData && resultData.success === true && resultData.data ) {
      this.setState({
        userInfo: resultData.data,
      });
    } else {
      message.error(Texts.message.USER_INFO_GET_FAILED)
    }

  }

  render () {
    return (
      <div>
        <Title 
          titleText={Texts.view.TITLE_USER_INFO} />
        <Row>
          <Col span={16}>
            <Info userInfo={this.state.userInfo} />
          </Col>
          <Col span={8}>
            <Avator />
          </Col>
        </Row>
      </div>
    )
  }
}

export default View;