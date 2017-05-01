import React from 'react';

import Form from 'antd/lib/form';
import Input from 'antd/lib/input'; 
import Button from 'antd/lib/button'; 
import Radio from 'antd/lib/radio';
import message from 'antd/lib/message';
import Texts from '@@texts/index';
import Request from '@@utils/request';

const FormItem = Form.Item;
const RadioGroup = Radio.Group;

const formLayout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 12 }
};
function parseFormFields( userInfo ) {
  let info = userInfo || {};
  info.gender = info.gender + '';
  let fields = {
    name: {
      value: info.name || '',
    },
    nick: {
      value: info.nick || '',
    },
    email: {
      value: info.email || '',
    },
    gender: {
      value: info.gender  || '0',
    }
  };
  return fields;
}

class App extends React.Component {

  getFormValues() {
    return new Promise((resolve, reject) => {
      this.props.form.validateFields((err, values) => {
        console.log(err, values);
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
    if ( formValues ) {
      formValues.gender = formValues.gender * 1;
      let result = await Request.post({
          url: '/api/user/updateUserInfo.json',
          data: formValues,
        });
      if ( result && result.success === true && result.data === true ) {
        message.success(Texts.view.MESSAGE_USERINFO_UPDATE_SUCCESS, 3); 
      } else {
        message.error(Texts.view.MESSAGE_USERINFO_UPDATE_FAIL, 3);
      }    
    } else { 
      message.error(Texts.view.MESSAGE_USERINFO_UPDATE_FAIL, 3);
    }
  } 
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem
          label={Texts.view.LABEL_USER_NAME}
          {...formLayout}
        >
          {getFieldDecorator('name', {
            rules: [{ required: true, message: Texts.view.TIP_INPUT_USERNAME }],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem
          label={Texts.view.LABEL_EMAIL}
          {...formLayout}
        >
          {getFieldDecorator('email', {
            rules: [{ required: true, message: Texts.view.TIP_INPUT_EMAIL }],
          })(
            <Input />
          )}
        </FormItem>

        <FormItem
          label={Texts.view.LABEL_NICK}
          {...formLayout}
        >
          {getFieldDecorator('nick', {
            //rules: [{ required: true, message: message: Texts.view.TIP_INPUT_NICK }],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem
          {...formLayout}
          label={Texts.view.LABEL_GENDER}
        >
          {getFieldDecorator('gender',  {
            rules: [{ required: true, message: Texts.view.TIP_SELECT_GENDER }],
          })(
            <RadioGroup>
              <Radio value="1">{Texts.view.LABEL_GENDER_MALE}</Radio>
              <Radio value="2">{Texts.view.LABEL_GENDER_FEMALE}</Radio>
            </RadioGroup>
          )}
        </FormItem>
         
        <FormItem
          wrapperCol={{ span: 8, offset: 8 }}
        >
          <Button type="primary" htmlType="submit">
            {Texts.view.BTN_UPDATE_USER_INFO}
          </Button>
        </FormItem>
      </Form>
    );
  }
}

const WrappedApp = Form.create({
  onFieldsChange(props, changedFields) {
    props.onChange(changedFields);
  },
  mapPropsToFields(props) {
    return {
      name: {
        ...props.name,
        value: props.name.value,
      },
      nick: {
        ...props.nick,
        value: props.nick.value,
      },
      email: {
        ...props.email,
        value: props.email.value,
      },
      gender: {
        ...props.gender,
        value: props.gender.value,
      },
    };
  },
  onValuesChange(_, values) {
    console.log(values);
  },
})(App);

class Info extends React.Component {
  state = {
    isInitPropToState: false,
    fields: parseFormFields(),
  }

  componentWillReceiveProps(nextProps){
    if ( this.state.isInitPropToState === false && Object.keys(nextProps.userInfo).length > 0 ) {
      this.setState({
        isInitPropToState: true,
        fields: parseFormFields(nextProps.userInfo),
      });
    }
  }

  handleFormChange = (changedFields) => {
    this.setState({
      fields: { ...this.state.fields, ...changedFields },
    });
  }
  
  render() {
    const fields = this.state.fields;
    return(
      <div>
        <WrappedApp  {...fields} onChange={this.handleFormChange} />
      </div>
    );
  }
}

export default Info;