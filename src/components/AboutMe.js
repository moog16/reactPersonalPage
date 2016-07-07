import React from 'react';
import classNames from 'classnames';
import Waypoint from 'react-waypoint';

export default class AboutMe extends React.Component {
  render() {
    const icons = [{
      icon: 'github',
      link: 'https://github.com/moog16'
    }, {
      icon: 'linkedin',
      link: 'https://www.linkedin.com/in/mattgoo'
    }, {
      icon: 'twitter',
      link: 'https://twitter.com/moog16'
    }, {
      icon: 'medium',
      link: 'https://medium.com/@moog16'
    }]
    return <div className='half-page bg--color-red u-p++ u-palm-ph- flex-center text--medium text--color-white'>
      <div className='section'>
        <div>
          I am a web developer with a passion for building simple and elegant apps that make everyday life easier. I believe technology can streamline your day, make the impossible possible, and change the lives of many.
        </div>
        <div className='flex-row flex-content-center u-mt+'>
          {
            icons.map((icon, index) => {
              return this.renderContactIcon(icon, index)
            })
          }
        </div>
      </div>
    </div>
  }

  renderContactIcon(icon, index) {
    let iconClass = classNames(
      [`icon-${icon.icon}`]);
    let contactClass = classNames(
      {'u-ml': index !== 0}, 'animation--ease', 'animate--transparency', {'transparent': false});

    return <div className={contactClass} key={index}>
      <a href={icon.link} className='link--color-light'>
        <i className={iconClass}></i>
      </a>
    </div>
  }

};
