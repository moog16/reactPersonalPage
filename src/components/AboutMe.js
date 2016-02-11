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
      <div className='half-page bg--color-red u-p++ palm-p+ text--center text--medium text--color-white'>
        <Waypoint
          onEnter={this._scrollAboutMeEnter.bind(this)}
          threshold={1} />
        <div className='section'>
          <div>
            I am a web developer with a passion for building simple and elegant frontend apps that make everyday life easier. I believe technology streamlines mundane chores and errands, makes the impossible possible, and will change the lives of many.
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
          </div>
        </div>
      </div>
    )
  }

  _scrollAboutMeEnter() {
    if(this.state.isShowingIcons) {
      return;
    }
    _.forEach([1,2,3], (num) => {
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
