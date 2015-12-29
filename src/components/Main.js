import React from 'react';
import {Router, RouteHandler} from 'react-router';

class Main extends React.Component{
  render() {
    return (
      <div className="main-container">
        <RouteHandler />
      </div>
    )
  }
};

export default Main;
