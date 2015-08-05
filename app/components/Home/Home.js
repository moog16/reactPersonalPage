import React from 'react';
import SplashPage from '../SplashPage';
import Capture from '../Capture';
import Statement from '../Statement';
import AboutMe from '../AboutMe';

class Home extends React.Component {
  render() {
    return  (
      <div>
        <SplashPage />
        <Capture />
        <Statement />
        <AboutMe />
      </div>
    )
  }
};

export default Home;
