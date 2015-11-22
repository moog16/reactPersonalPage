import React from 'react';
import Waypoint from 'react-waypoint';
import classNames from 'classnames';

class Splash extends React.Component {
  constructor(props) {
    super(props);
  }
// { 'fixed': !this.props.isShowingAboutMeContainer }
  render() {
    var coverHeaderClass = classNames(
      'cover__header', 'box--grey', 'ib', 'u-mt++', 'u-p', 'fixed');
    return  (
      <div className='text--center bg--color-opaque full-page'>
        <div className={coverHeaderClass}>
          <div className='border--bottom border--thick ib u-ph+ palm-ph-'>
            <h1 className='u-m0'>
              Matt Goo
            </h1>
          </div>
          <div className='text--medium text--color-blue'>
            Adventurer - Web Developer
          </div>
          <div className='text--medium text--color-blue'>
            {this.props.scrollPos}
          </div>
        </div>
      </div>
    )
  }

  _handleWaypointEnter() {
    console.log('hello entering')
  }

  _handleWaypointLeave() {
    console.log('leaving')
  }
};

Splash.propTypes = {};
Splash.defaultProps = {};

export default Splash;
