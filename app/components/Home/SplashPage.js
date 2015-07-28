import React from 'react';

class SplashPage extends React.Component {
  render() {
    return (
      <div className="cover--fish">
        <div className="layout layout--center layout--flush">
          <div className="cover__header layout__item u-1/2 text--color--light text--large text--center">
            <div className="text--center border--main border--bottom--dashed">Hi there! I am </div>
            <h1 className="text--center text--huge"> matt goo</h1>
          </div>
        </div>
      </div>
    )
  }
};

export default SplashPage;
