import React from 'react';

import Form from 'antd/lib/form';
import Input from 'antd/lib/input';
import Tooltip from 'antd/lib/tooltip';
import Cascader from 'antd/lib/cascader';
import Select from 'antd/lib/select';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Checkbox from 'antd/lib/checkbox';
import Button from 'antd/lib/button';
import message from 'antd/lib/message';
import Icon from 'antd/lib/icon';
import Texts from '@@texts/index';

import { signUpApi } from './action';

const FormItem = Form.Item;
const Option = Select.Option;


const SignUpForm = Form.create()(React.createClass({
  
  getInitialState() {
    return {
      passwordDirty: false,
    };
  },

  async handleSubmit(e) {
    e.preventDefault();
    let values = await this.getFormValues();  

    if ( values ) {
      let result = await signUpApi( values );
      if ( result && result.success === true ) {
        message.success( Texts.message.SIGN_UP_SUCCESS );
        window.location.href = '/user/sign?signUpSuccess=true';
      } else if ( result && result.code && Texts.code[result.code] ){
        message.error( Texts.code[result.code] );
      }
    } else {
      message.error( Texts.message.SYSTEM_BUSY );
    }
    
  },

  getFormValues() {
    let that = this;
    return new Promise(( resolve, reject ) => {
      that.props.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          resolve( values );
        } else {
          reject( false );
        }
      });
    });
  },

  handlePasswordBlur(e) {
    const value = e.target.value;
    this.setState({ passwordDirty: this.state.passwordDirty || !!value });
  },
  
  checkConfirm(rule, value, callback) {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback(Texts.module.TIP_MESSAGE_PASSWORD);
    } else {
      callback();
    }
  },
  
  checkPassword(rule, value, callback) {
    const form = this.props.form;
    if (value && this.state.passwordDirty) {
      // form.validateFields(['confirmPassword']);
      if (value && value !== form.getFieldValue('confirmPassword')) {
        callback(Texts.module.TIP_MESSAGE_PASSWORD);
      }
    }
    callback();
  },
  
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        span: 14,
        offset: 6,
      },
    };
    
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem
          {...formItemLayout}
          label={(
            <span>
              {Texts.module.LABEL_SIGN_USERNAME}
              <Tooltip title={Texts.module.TIP_SIGN_USERNAME}>
                <Icon type="question-circle-o" />
              </Tooltip>
            </span>
          )}
          hasFeedback
        >
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: Texts.module.TIP_INPUT_USERNAME }],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label={Texts.module.LABEL_SIGN_EMAIL}
          hasFeedback
        >
          {getFieldDecorator('email', {
            rules: [{
              type: 'email', message: Texts.module.TIP_MESSAGE_EMAIL,
            }, {
              required: true, message: Texts.module.TIP_INPUT_EMAIL,
            }],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label={Texts.module.LABEL_SIGN_PASSWORD}
          hasFeedback
        >
          {getFieldDecorator('password', {
            rules: [{
              required: true, message: Texts.module.TIP_INPUT_PASSWORD,
            }, {
              validator: this.checkPassword ,
            }],
          })(
            <Input type="password" onBlur={this.handlePasswordBlur} />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label={Texts.module.LABEL_SIGN_CONFIRM_PASSWORD}
          hasFeedback
        >
          {getFieldDecorator('confirmPassword', {
            rules: [{
              required: true, message: Texts.module.TIP_INPUT_CONFIRM_PASSWORD,
            }, {
              validator: this.checkConfirm ,
            }],
          })(
            <Input type="password" />
          )}
        </FormItem>
        
        <FormItem {...tailFormItemLayout} style={{ marginBottom: 8 }}>
          {getFieldDecorator('agreement', {
            valuePropName: 'checked',
          })(
            <Checkbox>{Texts.module.TEXT_I_HAVE_READ} <a>{Texts.module.TEXT_SIGN_PROTOCOL}</a></Checkbox>
          )}
        </FormItem>
        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit" size="large">{Texts.module.BTN_SIGN_SUBMIT}</Button>
        </FormItem>
      </Form>
    );
  },
}));


export default SignUpForm;