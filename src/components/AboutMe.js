import React from 'react';
import ContactIcon from './ContactIcon';
import Waypoint from 'react-waypoint';
import _ from 'lodash';

class AboutMe extends React.Component {
  constructor() {
    super();
    this.state = {
      hideIcon1: true,
      hideIcon2: true,
      hideIcon3: true,
      isShowingIcons: false
    };
  }
  render() {
    return  (
      <div className='half-page bg--color-red u-p++ palm-p text--center text--medium text--color-white'>
        <Waypoint
          onEnter={this._scrollAboutMeEnter.bind(this)}
          threshold={1} />
        <div className='section'>
          <div>
            I am a web developer with a passion for building simple and elegant apps that make everyday life easier. I believe technology can streamline your day, make the impossible possible, and can change the lives of many.
          </div>
          <div className='layout u-mt+'>
            {this.state.hideIcon1}
            <ContactIcon icon="github"
                         link="https://github.com/moog16"
                         hide={this.state.hideIcon1} />
            <ContactIcon icon="linkedin"
                         link="https://www.linkedin.com/in/mattgoo"
                         hide={this.state.hideIcon2} />
            <ContactIcon icon="twitter"
                         link="https://twitter.com/moog16"
                         hide={this.state.hideIcon3} />
            <ContactIcon icon="medium"
                         text="tech"
                         link="https://medium.com/@moog16"
                         hide={this.state.hideIcon4} />
          </div>
        </div>
      </div>
    )
  }

  _scrollAboutMeEnter() {
    if(this.state.isShowingIcons) {
      return;
    }
    _.forEach([1,2,3,4], (num) => {
      _.delay(() => {
        let icon = `hideIcon${num}`;
        let state = {isShowingIcons: true};
        state[icon] = false;
        this.setState(state);
      }, num*300);
    });
  }

};

AboutMe.propTypes = {
};
AboutMe.defaultProps = {
};

export default AboutMe;
