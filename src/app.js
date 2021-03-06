import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, browserHistory} from 'react-router';
import { HomeContainer } from './components/Home';
import { createStore, applyMiddleware } from 'redux'
import { connect, Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './reducers/reducers';
import fetch from 'whatwg-fetch';

const middleware = [thunk];
const store = createStore(
  reducers,
  applyMiddleware(...middleware)
);

ReactDOM.render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route name="app" path="/" component={HomeContainer}></Route>
    </Router>
  </Provider>
  ), document.getElementById('app')
);
