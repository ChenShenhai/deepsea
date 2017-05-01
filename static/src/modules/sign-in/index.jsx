import React from 'react';
import Form from 'antd/lib/form';
import Icon from 'antd/lib/icon';
import Input from 'antd/lib/input';
import Button from 'antd/lib/button';
import Checkbox from 'antd/lib/checkbox';
import message from 'antd/lib/message';

import Request from '@@utils/request';
import Texts from '@@texts/index';
import { signInApi, signInForm } from './action';

const FormItem = Form.Item;

const SignInForm = Form.create()(React.createClass({
  
  async handleSubmit(e) {
    e.preventDefault();

    let values = await this.getFormValues();
    if ( values ) {
      let result = await signInApi( values );
      if ( result && result.success === true ) {
        message.success( Texts.message.SIGN_IN_SUCCESS );
        signInForm( values );
      } else if ( result && result.code && Texts.code[result.code] ){
        message.error( Texts.code[result.code] );
      }
    } else {
      message.error( Texts.message.SYSTEM_BUSY );
    }
  },


  getFormValues() {
    let that = this;
    return new Promise((resolve, reject) => {
      that.props.form.validateFields((err, values) => {
        if (!err) {
          resolve( values );
        } else {
          reject( false );
        }
      });
    });
  },

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div style={{ width: "280px", margin: "0 auto" }}>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <FormItem>
            {getFieldDecorator('userName', {
              rules: [{ required: true, message: Texts.module.TIP_INPUT_USERNAME}],
            })(
              <Input addonBefore={<Icon type="user" />} placeholder={Texts.module.TIP_INPUT_USERNAME} />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: Texts.module.TIP_INPUT_PASSWORD }],
            })(
              <Input addonBefore={<Icon type="lock" />} type="password" placeholder={Texts.module.TIP_INPUT_PASSWORD} />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(
              <Checkbox>{Texts.module.TEXT_REMEMBER_ME}</Checkbox>
            )}
            <a className="login-form-forgot">{Texts.module.TEXT_FORGET_PASSWORD}</a><br/>
            <Button type="primary" htmlType="submit" className="login-form-button">
              {Texts.module.BTN_SIGN_SUBMIT}
            </Button>
          </FormItem>
        </Form>
      </div>
    );
  },
}));
export default SignInForm;