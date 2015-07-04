import React from 'react';

import Main from '../components/Main';
import Home from '../components/Home/Home';
import {Route, Router, DefaultRoute} from 'react-router';

module.exports = (
  <Route name="app" path="/" handler={Main}>
    <DefaultRoute handler={Home} />
  </Route>
);
