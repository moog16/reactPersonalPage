import React from 'react';
import SplashPage from '../SplashPage';
import Capture from '../Capture';
import Statement from '../Statement';

class Home extends React.Component {
  render() {
    return  (
      <div>
        <SplashPage />
        <Capture />
        <Statement />
      </div>
    )
  }
};

export default Home;
