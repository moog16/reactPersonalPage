import React from 'react';

class AboutMe extends React.Component {
  render() {
    return  (
      <div className='half-page bg--color-red u-p++ palm-p+ text--center text--medium text--color-white'>
        I am a web developer with a passion for building simple and elegant frontend apps that make everyday life easier. I believe technology streamlines mundane chores and errands, makes the impossible possible, and will change the lives of many.
      </div>
    )
  }
};

AboutMe.propTypes = {
};
AboutMe.defaultProps = {
};

export default AboutMe;
