import React from 'react';

import Form from 'antd/lib/form';
import Input from 'antd/lib/input'; 
import Button from 'antd/lib/button'; 
import Texts from '@@texts/index';
import Request from '@@utils/request';

const FormItem = Form.Item;
const formLayout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 12 }
};
function parseFormFields( userInfo ) {
  let info = userInfo || {};
  let fields = {
    name: {
      value: info.name || '',
    },
    nick: {
      value: info.nick || '',
    },
    email: {
      value: info.email || '',
    }
  };
  return fields;
}

class App extends React.Component {

  getFormValues() {
    return new Promise((resolve, reject) => {
      this.props.form.validateFields((err, values) => {
        console.log(err, values)
        if (!err) {
          resolve(values);
        } else {
          reject(false);
        }
      });
    })
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    let formValues = await this.getFormValues();
    if ( formValues ) {
      let result = await Request.post({
          url: '/api/user/updateUserInfo.json',
          data: formValues,
        });
      console.log( 'result=', result );
    } else {
      console.log( 'get data false' );
    }
  } 
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem
          label="Username"
          {...formLayout}
        >
          {getFieldDecorator('name', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem
          label="E-mail"
          {...formLayout}
        >
          {getFieldDecorator('email', {
            rules: [{ required: true, message: 'Please input your email!' }],
          })(
            <Input />
          )}
        </FormItem>

        <FormItem
          label="Nick"
          {...formLayout}
        >
          {getFieldDecorator('nick', {
            //rules: [{ required: true, message: 'Please input your nick!' }],
          })(
            <Input />
          )}
        </FormItem>
         
        <FormItem
          wrapperCol={{ span: 8, offset: 8 }}
        >
          <Button type="primary" htmlType="submit">
            Submit
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
      })
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
    )
  }
}

export default Info;