import React from 'react';

export default class Resume extends React.Component{
  render() {
    const workDescriptions = [{
      title: 'Senior Software Engineer',
      date: 'April 2015 - Present',
      logoPath: 'points_logo.jpg',
      description: <p>At Points I've been working on our two consumer sites <a href="https://points.com">Points.com</a>, a loyalty program wallet and <a href="https://pointshound.com">Pointshound.com</a>, a hotel booking site where you earn miles. My main responsibilities include all aspects of maintaining, building, and architecting the frontend of these two sites. Most recently I have been learning iOS to build expand our reach to mobile users and compliment our product.</p>
    }, {
      title: 'Web Developer',
      date: 'December 2013 - March 2015',
      logoPath: 'switchfly_logo.jpg',
      description: <p>At Switchfly I worked on a large enterprise single page Ember.js application with a team of 30+ developers for our client American Express. My work and contributions to the team included a large range of features and components, as well as tests and asset pipeline improvements. I also onboarded and trained many of our new developers who were new to the framework Ember.js.</p>
    }, {
      title: 'Electrical Engineer',
      date: 'June 2012 - July 2013',
      logoPath: 'dg_logo.png',
      description: <p>I was a electrical engineering contractor during my time at Design Group. My focus was on process engineering on beverage manufacturing lines at companies such as <a href="http://anheuser-busch.com/">Anheuser-Busch</a>, <a href="http://www.nestle-watersna.com/">Nestle Waters</a>, <a href="http://www.pepsi.com/">Pepsi</a>, and <a href="http://www.sutterhome.com/">Sutter Home</a>.</p>
    }];

    return <div className="u-1/1 bg--color-white">
      <div className="u-p u-pb++ section">
        <h1>Resume</h1>

        <div className="u-mb u-1/1">
          <a href="https://docs.google.com/document/d/1K2meu8QN1NByZ8YvG4kVzfF4wBAWIRs_sLFB4fiJu68/edit?usp=sharing">
            <div className="btn u-1/2-palm u-1/4-lap u-1/6">
              <i className='icon-cloud-download u-mr--'></i>
              Download
            </div>
          </a>
        </div>
        {
          workDescriptions.map(description => {
            return <div className='u-mt+' key={description.title}>
              <img className="resume-image" src={`img/logos/${description.logoPath}`} />
              <div className="u-pl">
                <h4 className="u-mv0">
                  { description.title }
                </h4>
                <div className="text--hint">
                  { description.date }
                </div>
                { description.description }
              </div>
            </div>
          })
        }
      </div>
    </div>
  }
};
