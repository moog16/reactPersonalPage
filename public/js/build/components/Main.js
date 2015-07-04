import React from 'react';
var RouteHandler = require('react-router').RouteHandler;

class Main extends React.Component{
  render(){
    return (
      React.createElement("div", {className: "main-container ml+"}, 
        React.createElement("h2", null, "This is a header"), 
        React.createElement(RouteHandler, null)
      )
    )
  }
};

module.exports = Main;
