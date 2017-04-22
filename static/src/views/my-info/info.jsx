import React from 'react';
import Request from '@@utils/request';
import { Form, Select, Input, Button } from 'antd'; 
import texts from '@@texts/index';

const FormItem = Form.Item;
const Option = Select.Option;

class App extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    
  }
  
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem
          label={texts.view.LABEL_USER_NAME}
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 12  }}
        >
          {getFieldDecorator(texts.view.LABEL_USER_NAME, {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem
          label={texts.view.LABEL_NICK}
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 12  }}
        >
          {getFieldDecorator(texts.view.LABEL_NICK, {
            rules: [{ required: true, message: 'Please input your nick!' }],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 12  }}
          label={texts.view.LABEL_EMAIL}
        >
          {getFieldDecorator(texts.view.LABEL_EMAIL, {
            rules: [{
              type: 'email', message: 'The input is not valid E-mail!',
            }, {
              required: true, message: 'Please input your E-mail!',
            }],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem
          label={texts.view.LABEL_GENDER}
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 12 }}
        >
          {getFieldDecorator(texts.view.LABEL_GENDER, {
            rules: [{ required: true, message: 'Please select your gender!' }],
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


export default WrappedApp;

