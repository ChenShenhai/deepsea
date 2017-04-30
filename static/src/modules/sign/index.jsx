import React from 'react';
import Tabs from 'antd/lib/tabs';
import SignInForm from '@@modules/sign-in';
import SignUpForm from '@@modules/sign-up';
import Texts from '@@texts/index';

const TabPane = Tabs.TabPane;

class FormGroup extends React.Component {
  render() {
    return (
      <div style={{ width: "640px", margin: "0 auto" }}>
        <Tabs defaultActiveKey="1" size="small">
          <TabPane tab={Texts.module.TAB_SIGN_IN} key="1">
            <SignInForm />
          </TabPane>
          <TabPane tab={Texts.module.TAB_SIGN_UP} key="2">
            <SignUpForm />
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

export default FormGroup;