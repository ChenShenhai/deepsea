import React from 'react';

import Form from 'antd/lib/form';
import Input from 'antd/lib/input'; 
import Button from 'antd/lib/button'; 

import Texts from '@@texts/index';

const FormItem = Form.Item;
const formLayout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 12 }
}

class App extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        // console.log('Received values of form: ', values);
      }
    });
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
    fields: {
      name: {
        value: '',
      },
      nick: {
        value: '',
      },
      email: {
        value: '',
      }
    },
  }

  componentWillReceiveProps(nextProps){
    if ( this.state.isInitPropToState === false && Object.keys(nextProps.userInfo).length > 0 ) {
      this.setState({
        isInitPropToState: true,
        fields: {
          name: {
            value: nextProps.userInfo.name,
          },
          nick: {
            value: nextProps.userInfo.nick,
          },
          email: {
            value: nextProps.userInfo.email,
          }
          
        },
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