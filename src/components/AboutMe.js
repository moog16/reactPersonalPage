import React from 'react';
import ContactIcon from './ContactIcon';
import Waypoint from 'react-waypoint';
// import _ from 'lodash';

export default class AboutMe extends React.Component {
  render() {
    return  (
      <div className='half-page bg--color-red u-p++ palm-p text--center text--medium text--color-white'>
        <div className='section'>
          <div>
            I am a web developer with a passion for building simple and elegant apps that make everyday life easier. I believe technology can streamline your day, make the impossible possible, and change the lives of many.
          </div>
          <div className='layout u-mt+'>
            <ContactIcon icon="github"
                         link="https://github.com/moog16" />
            <ContactIcon icon="linkedin"
                         link="https://www.linkedin.com/in/mattgoo" />
            <ContactIcon icon="twitter"
                         link="https://twitter.com/moog16" />
            <ContactIcon icon="medium"
                         text="tech"
                         link="https://medium.com/@moog16" />
          </div>
        </div>
      </div>
    )
  }

};
