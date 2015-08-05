import React from 'react';

class AboutMe extends React.Component {
  render() {
    return (
      <div className="bg--color-red full-page relative">
        <div className="layout layout--right">
          <div className="layout__item u-1/3 page--center--left">
            <div className="u-p">
              <div className="circle relative">
                <img src="assets/images/smile.jpg" className="image--smile"/>
              </div>
            </div>
          </div>
          <div className="layout__item u-2/3">
            <ul className="timeline">
              <div className="u-p">
                <div className="circle">
                  <img src="assets/images/sunset_bridge.jpg" className=""/>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>
    )
  }
};

export default AboutMe;
