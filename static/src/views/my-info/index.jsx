
import React from 'react';
import Request from '@@utils/request';
import { Form, Select, Input, Button, Row, Col } from 'antd'; 
import Info from './info';
import Avator from './avator';


class View extends React.Component {

  async componentWillMount() {
    let userInfo = await Request.get({url: '/api/user/getUserInfo.json'});
    console.log('userInfo=', userInfo)
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  handleSelectChange = (value) => {
    console.log(value);
    this.props.form.setFieldsValue({
      note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`,
    });
  }

  render () {
    return (
      <div>
        <Row>
          <Col span={16}>
            <Info />
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