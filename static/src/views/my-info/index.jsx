
import React from 'react';
import Request from '@@utils/request';
import { Form, Select, Input, Button, Row, Col } from 'antd'; 

const FormItem = Form.Item;
const Option = Select.Option;

class App extends React.Component {
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
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem
          label="Note"
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 16 }}
        >
          {getFieldDecorator('note', {
            rules: [{ required: true, message: 'Please input your note!' }],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem
          label="Gender"
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 16 }}
        >
          {getFieldDecorator('gender', {
            rules: [{ required: true, message: 'Please select your gender!' }],
            onChange: this.handleSelectChange,
          })(
            <Select placeholder="Select a option and change input text above">
              <Option value="male">male</Option>
              <Option value="female">female</Option>
            </Select>
          )}
        </FormItem>
        <FormItem
          wrapperCol={{ span: 8, offset: 4 }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </FormItem>
      </Form>
    );
  }
}

const WrappedApp = Form.create()(App);


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
          <Col span={12}>
            <WrappedApp />
          </Col>
          <Col span={12}>col-12</Col>
        </Row>
        
      </div>
    )
  }
}

export default View;