import React from 'react';
var Main = require('../components/Main');
var Home = require('../components/Home');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;

module.exports = (
  React.createElement(Route, {name: "app", path: "/", handler: Main}, 
    React.createElement(DefaultRoute, {handler: Home})
  )
);
