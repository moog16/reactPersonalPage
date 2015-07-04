import React from 'react';
var RouteHandler = require('react-router').RouteHandler;

class Main extends React.Component{
  render(){
    return (
      <div className="main-container ml+">
        <h2>This is a header</h2>
        <RouteHandler />
      </div>
    )
  }
};

module.exports = Main;
