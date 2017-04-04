import React, { PropTypes } from 'react'
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'
import rootRoute from './routers';
import './style.scss';

class App extends React.Component {
  render() {
    return (
      <Router history={hashHistory} routes={rootRoute} >
      </Router>
    )
  }
}


export default App