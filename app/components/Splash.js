import React from 'react';

class Splash extends React.Component {
  render() {
    return  (
      <div className='text--center'>
        <div className='bg--color-opaque full-page'>
          <div className='box--grey ib u-mt++ u-p'>
            <div className='border--bottom border--thick ib u-ph+'>
              <h1 className='cover__header u-m0'>
                Matt Goo
              </h1>
            </div>
            <div className='text--medium text--color-blue'>
              Adventurer - Web Developer
            </div>
          </div>
        </div>
      </div>
    )
  }
};

export default Splash;
