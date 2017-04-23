import React from 'react';

import Form from 'antd/lib/form';
import Input from 'antd/lib/input'; 

import Texts from '@@texts/index';

const FormItem = Form.Item;

const CustomizedForm = Form.create({
  onFieldsChange(props, changedFields) {
    props.onChange(changedFields);
  },
  mapPropsToFields(props) {
    return {
      name: {
        ...props.name,
        value: props.name.value.toUpperCase(),
      },
    };
  },
  onValuesChange(_, values) {
    console.log(values);
  },
})((props) => {
  const { getFieldDecorator } = props.form;
  return (
    <Form layout="inline">
      <FormItem label={Texts.view.LABEL_USER_NAME}>
        {getFieldDecorator('name', {
          rules: [{ required: true, message: 'Username is required!' }],
        })(<Input />)}
      </FormItem>
       <FormItem label={Texts.view.LABEL_NICK}>
        {getFieldDecorator('nick', {
          rules: [{ required: true, message: 'Username is required!' }],
        })(<Input />)}
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
  };
  
  handleFormChange = (changedFields) => {
    // const fields = this.state.fields;
    // let { userInfo } = this.props;
    // let fileds = this.getFileds( userInfo )
    // this.setState({
    //   fields: { ...fields, ...changedFields },
    // });
    // 
  }

  getFileds( userInfo ) {
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

  render() {
    let fields = this.state.fields;
    return (
      <div>
        <CustomizedForm {...fields} onChange={this.handleFormChange} />
        <pre className="language-bash">
          {JSON.stringify(fields, null, 2)}
        </pre>
      </div>
    );
  }
}

export default Info;