import React from 'react';
import Menu from './Menu';
import {Router, RouteHandler} from 'react-router';

class Main extends React.Component{
  render() {
    return (
      <div className="main-container">
        <Menu />
        <RouteHandler />
      </div>
    )
  }
};

export default Main;
