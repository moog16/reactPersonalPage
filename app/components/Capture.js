import React from 'react';
import Waypoint from 'react-waypoint';

class Capture extends React.Component {
  render() {
    return (
      <div className="bg--color-blue full-page relative">
        <div className="layout layout--center layout--flush">
          <div className="page--center--portable layout__item u-1/2 u-1/1-portable text--color-light text--large text--center">
              <div className="text--center">
                <Waypoint
                  onEnter={this._handleWaypointEnter}
                  onLeave={this._handleWaypointLeave}
                  threshold={0.2}
                />
                <div className="text--style-header text--center">
                   I love making things
                </div>
                <h1 className="text--uppercase text--style-normal text--color-dark-blue u-mt0 text--center">
                  Beautiful
                </h1>
              </div>
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

export default Capture;
