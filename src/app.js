import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, browserHistory} from 'react-router';
import Home from './components/Home';
import fetch from 'fetch';

const routes = (
  <Route name="app" path="/" component={Home}></Route>
);

ReactDOM.render((
  <Router history={browserHistory}>
    {routes}
  </Router>
  ), document.getElementById('app')
);
