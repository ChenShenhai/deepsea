import React from 'react'
import PropTypes from 'prop-types';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'
import rootRoute from './routers';
// import 'antd/lib/date-picker/style/css'
import './style.less';
import 'antd/lib/layout/style/css'

class App extends React.Component {
  render() {
    return (
      <Router history={hashHistory} routes={rootRoute} >
      </Router>
    )
  }
}


export default App