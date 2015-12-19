import React from 'react';
import ContactIcon from '../AboutMe/ContactIcon';

class AboutMe extends React.Component {
  render() {
    return  (
      <div className='half-page bg--color-red u-p++ palm-p+ text--center text--medium text--color-white'>
        <div>
          I am a web developer with a passion for building simple and elegant frontend apps that make everyday life easier. I believe technology streamlines mundane chores and errands, makes the impossible possible, and will change the lives of many.
        </div>
        <div className='layout u-mt+'>
          <ContactIcon icon="github" link="https://github.com/moog16"/>
          <ContactIcon icon="linkedin" link="https://www.linkedin.com/in/mattgoo"/>
          <ContactIcon icon="twitter" link="https://twitter.com/moog16"/>
        </div>
      </div>
    )
  }
};

AboutMe.propTypes = {
};
AboutMe.defaultProps = {
};

export default AboutMe;
