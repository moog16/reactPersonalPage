import React from 'react';

export default class Resume extends React.Component{
  render() {
    return (
      <div className="u-1/1 bg--color-white">
        <div className="u-p u-pb++ section">
          <h2 className="text--center">
            Resume
          </h2>

          <div className="u-mb u-1/1">
            <a href="https://docs.google.com/document/d/1K2meu8QN1NByZ8YvG4kVzfF4wBAWIRs_sLFB4fiJu68/edit?usp=sharing">
              <div className="btn u-1/2-palm u-1/4-lap u-1/6">
                Download
              </div>
            </a>
          </div>

          <div>
            <img className="resume-image" src="img/logos/points_logo.jpg" />
            <div className="u-pl">
              <h4 className="u-mv0">
                Development Engineer
              </h4>
              <div className="text--hint">
                April 2015 - Present
              </div>
              <p>
                At Points I've been working on our two consumer sites <a href="https://points.com">Points.com</a>, a loyalty program wallet and <a href="https://pointshound.com">Pointshound.com</a>, a hotel booking site where you earn miles. My main responsibilities include all aspects of maintaining, building, and architecting the frontend of these two sites. Most recently I have been learning iOS to build expand our reach to mobile users and compliment our product.
              </p>
            </div>
          </div>

          <div className="u-mb+">
            <img className="resume-image" src="img/logos/switchfly_logo.jpg" />
            <div className="u-pl">
              <h4 className="u-mv0">
                Web Developer
              </h4>
              <div className="text--hint">
                December 2013 - March 2015
              </div>
              <p>
                At Switchfly I worked on a large enterprise single page Ember.js application with a team of 30+ developers for our client American Express. My work and contributions to the team included a large range of features and components, as well as tests and asset pipeline improvements. I also onboarded and trained many of our new developers who were new to the framework Ember.js.
              </p>
            </div>
          </div>

          <div>
            <img className="resume-image" src="img/logos/dg_logo.png" />
            <div className="u-pl">
              <h4 className="u-mv0">
                Electrical Engineer
              </h4>
              <div className="text--hint">
                June 2012 - July 2013
              </div>
              <p>
                I was a electrical engineering contractor during my time at Design Group. My focus was on process engineering on beverage manufacturing lines at companies such as <a href="http://anheuser-busch.com/">Anheuser-Busch</a>, <a href="http://www.nestle-watersna.com/">Nestle Waters</a>, <a href="http://www.pepsi.com/">Pepsi</a>, and <a href="http://www.sutterhome.com/">Sutter Home</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
};
