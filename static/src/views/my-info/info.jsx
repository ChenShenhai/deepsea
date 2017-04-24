import React from 'react';

import Form from 'antd/lib/form';
import Input from 'antd/lib/input'; 
import Button from 'antd/lib/button'; 

import Texts from '@@texts/index';

const FormItem = Form.Item;
const formItemLayout = {
  labelCol: {
    span: 4
  },
  wrapperCol: {
    span: 8
  },
};

const CustomizedForm = Form.create({
  
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
    };
  },

  onValuesChange(_, values) {
    console.log(values);
  },
})((props) => {
  const { getFieldDecorator } = props.form;
  return (
    <Form onSubmit={this.handleSubmit}>
      <FormItem 
        {...formItemLayout}
        label={Texts.view.LABEL_USER_NAME}>
        {getFieldDecorator('name', {
          rules: [{ required: true, message: 'Username is required!' }],
        })(<Input />)}
      </FormItem>
      <FormItem 
        {...formItemLayout}
        label={Texts.view.LABEL_NICK}>
        {getFieldDecorator('nick', {
          rules: [{ required: true, message: 'Username is required!' }],
        })(<Input />)}
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
});

class Info extends React.Component {
  
  state = {
    fields: {
      name: {
        value: '',
      },
      nick: {
        value: '',
      },
    },
    isInitedFields: false,
  };

  componentDidUpdate() {
    let {userInfo} = this.props;
    let {isInitedFields} = this.state;
    if ( isInitedFields === false ) {
      let fields = this.getFields(userInfo);
      this.setState({
        fields,
        isInitedFields: true,
      })
      // console.log( 'componentWillReceiveProps=', userInfo );
    }
  }
  
  handleFormChange = (changedFields) => {
    this.setState({
      fields: { ...this.state.fields, ...changedFields },
    });
  }

  getFields( userInfo ) {
    return {
      name: {
        value: userInfo.name,
      },
      nick: {
        value: userInfo.nick,
      },
      email: {
        value: userInfo.email,
      },
      gender: {
        value: userInfo.gender,
      },
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  render() {
    let fields = this.state.fields;
    
    // let fileds = this.getFileds(userInfo);
    return (
      <div onSubmit={(e) => {this.handleSubmit(e)}}>
        <CustomizedForm {...fields} onChange={this.handleFormChange} />
        <pre className="language-bash">
          {JSON.stringify(fields, null, 2)}
        </pre>
      </div>
    );
  }
}

export default Info;