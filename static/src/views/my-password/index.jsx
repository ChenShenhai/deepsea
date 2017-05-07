import React from 'react';

import Form from 'antd/lib/form';
import Input from 'antd/lib/input'; 
import Button from 'antd/lib/button'; 
import Radio from 'antd/lib/radio';
import message from 'antd/lib/message';
import Texts from '@@texts/index';
import Request from '@@utils/request';
import Title from '@@components/title/index'; 

const FormItem = Form.Item;
const RadioGroup = Radio.Group;

const formLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 8 }
};


class App extends React.Component {

  getFormValues() {
    return new Promise((resolve, reject) => {
      this.props.form.validateFields((err, values) => {
        if (!err) {
          resolve(values);
        } else {
          reject(false);
        }
      });
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    let formValues = await this.getFormValues();
    console.log('formValues=', formValues);

    if ( formValues ) {
      let result = await Request.post({
        url: '/api/user/updatePassword.json',
        data: formValues
      });
      if( result.success === true ) {
        message.success(Texts.code[result.code], 3);
      } else {
        message.error(Texts.code[result.code], 3);
      }
      console.log(result);
    } else { 
      message.error(Texts.view.MESSAGE_USERINFO_UPDATE_FAIL, 3);
    }
  } 
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem
          label={Texts.view.LABEL_OLD_PASSWORD}
          {...formLayout}
        >
          {getFieldDecorator('oldPassword', {
            rules: [{ required: true, message: Texts.view.TIP_INPUT_OLD_PASSWPRD }],
          })(
            <Input type="password" />
          )}
        </FormItem>
        <FormItem
          label={Texts.view.LABEL_NEW_PASSWORD}
          {...formLayout}
        >
          {getFieldDecorator('newPassword', {
            rules: [{ required: true, message: Texts.view.TIP_INPUT_NEW_PASSWPRD }],
          })(
            <Input type="password" />
          )}
        </FormItem>
        <FormItem
          label={Texts.view.LABLE_CONFIRM_NEW_PASSWORD}
          {...formLayout}
        >
          {getFieldDecorator('confirmPassword', {
            rules: [{ required: true, message: Texts.view.TIP_INPUT_CONFIRM_NEW_PASSWPRD }],
          })(
            <Input type="password" />
          )}
        </FormItem>
        
        
        <FormItem
          wrapperCol={{ span: 8, offset: 6 }}
        >
          <Button type="primary" htmlType="submit">
            {Texts.view.BTN_UPDATE_USER_PASSWORD}
          </Button>
        </FormItem>
      </Form>
    );
  }
}

const WrappedApp = Form.create()(App);

class View extends React.Component {
  render() {
    return(
      <div>
        <Title 
          titleText={Texts.view.TITLE_USER_PASSWORD} />
        <WrappedApp    />
      </div>
    );
  }
}

export default View;