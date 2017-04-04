import 'whatwg-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
// import App from './../apps/dashboard/index.jsx';
import App from '@@apps/dashboard/index';

ReactDOM.render( <App />,
  document.getElementById("app"));
