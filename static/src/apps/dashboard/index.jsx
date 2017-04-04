import React, { PropTypes } from 'react'
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'
import rootRoute from './routers';
// import 'antd/lib/date-picker/style/css'
import './style.less';

class App extends React.Component {
  render() {
    return (
      <Router history={hashHistory} routes={rootRoute} >
      </Router>
    )
  }
}


export default App