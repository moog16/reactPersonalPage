import React from 'react';

class SplashPage extends React.Component {
  render() {
    return (
      <div className="hero--blue-door relative">
        <div className="layout layout--flush">
          <div className="page--center layout__item u-1/2 text--color-light text--large text--center">
            <div className="text--center border--main border--bottom--dashed">Hi there! I am </div>
            <h1 className="text--center text--huge u-mt0"> matt goo</h1>
          </div>
        </div>
      </div>
    )
  }
};

export default SplashPage;
