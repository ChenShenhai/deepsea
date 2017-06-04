import React from 'react';
import PropTypes from 'prop-types';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';
import rootRoute from './routers';
import './style.less';
import 'antd/dist/antd.min.css';


class App extends React.Component {
  render() {
    return (
      <Router history={hashHistory} routes={rootRoute} >
      </Router>
    );
  }
}


export default App;