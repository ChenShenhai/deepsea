import React from 'react'
import { Link } from 'react-router'
import Header from './header.jsx'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import reducer from './../reducers'

// const middleware = [ thunk ]

const store = createStore(
  reducer,
  // applyMiddleware(...middleware)
)


class Main extends React.Component {
  render() {
    return (
      <Provider store={store} >
        <div>
          <Header></Header>
          {this.props.children}
        </div>
      </Provider>
    )
  }
}

export default Main
