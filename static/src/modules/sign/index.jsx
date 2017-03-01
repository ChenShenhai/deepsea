import React from 'react'
import { Tabs } from 'antd'
import SignInForm from './../sign-in/index.jsx'
import SignUpForm from './../sign-up/index.jsx'

const TabPane = Tabs.TabPane

class FormGroup extends React.Component {
  render() {
    return (
      <div style={{ width: "640px", margin: "0 auto" }}>
        <Tabs defaultActiveKey="1" size="small">
          <TabPane tab="登录" key="1">
            <SignInForm />
          </TabPane>
          <TabPane tab="注册" key="2">
            <SignUpForm />
          </TabPane>
        </Tabs>
      </div>
    )
  }
}

export default FormGroup