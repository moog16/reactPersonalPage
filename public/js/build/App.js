import React from 'react';
import Router from 'react-router';
import routes from './config/routes';

Router.run(routes, (Root) => {
  React.render(React.createElement(Root, null), document.getElementById('app'));
});
