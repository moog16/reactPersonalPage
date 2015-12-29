import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router} from 'react-router';
import Home from './components/Home';

const routes = (
  <Route name="app" path="/" component={Home}></Route>
);

ReactDOM.render((
  <Router>
    {routes}
  </Router>
  ), document.getElementById('app')
);
