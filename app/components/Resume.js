import React from 'react';

class Resume extends React.Component{
  render() {
    return (
      <div className="u-1/1 bg--color-white">
        <div className="u-p section">
          <img src="assets/images/logos/points_logo.jpg" />
          <div className="u-pl">
            <h4 className="u-mb0">
              Developement Engineer
            </h4>
            <div className="text--hint">
              April 2015 - Present
            </div>
            <p className="">
              At Points I've been working on our two consumer sites <a href="http://points.com">Points.com</a>, a loyalty program wallet and <a href="https://pointshound.com">Pointshound.com</a>, a hotel booking site where you earn miles. My main responsibilities include all aspects of maintaining, building, and architecting the frontend of these two sites. Most recently I have been learning iOS to build expand our reach to mobile users and compliment our product.
            </p>
          </div>

          <img src="assets/images/logos/switchfly_logo.jpg" />
          <div className="u-pl">
            <h4 className="u-mb0">
              Web Developer
            </h4>
            <div className="text--hint">
              December 2013 - March 2015
            </div>
            <p className="">
              At Switchfly I worked on a large enterprise single page Ember.js application with a team of 30+ developers for our client American Express. My work and contributions to the team included a large range of features and components, as well as tests and asset pipeline improvements. I also onboarded and trained many of our new developers who were new to the framework Ember.js.
            </p>
          </div>

          <img src="assets/images/logos/dg_logo.png" />
          <div className="u-pl">
            <h4 className="u-mb0">
              Electrical Engineer
            </h4>
            <div className="text--hint">
              June 2012 - July 2013
            </div>
            <p className="">
              I was a electrical engineering contractor during my time at Design Group. My focus was on process engineering on beverage manufacturing lines at companies such as <a href="http://anheuser-busch.com/">Anheuser-Busch</a>, <a href="http://www.nestle-watersna.com/">Nestle Waters</a>, <a href="http://www.pepsi.com/">Pepsi</a>, and <a href="http://www.sutterhome.com/">Sutter Home</a>.
            </p>
          </div>
        </div>
      </div>
    )
  }
};

export default Resume;
