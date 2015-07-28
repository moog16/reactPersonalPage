import React from 'react';
import SplashPage from './SplashPage';
import Capture from '../Capture';

class Home extends React.Component {
  render() {
    return  (
      <div>
        <SplashPage />
        <Capture />
      </div>
    )
  }
};

export default Home;
