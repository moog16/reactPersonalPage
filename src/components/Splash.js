import React from 'react';
import classnames from 'classnames';

export default class Splash extends React.Component {

  render() {
    const containerClass = classnames(
      'text--center', 'bg--color-opaque', 'full-page');
    const coverHeaderClass = classnames(
      'cover__header', 'box--grey', 'ib', 'u-p', 'u-1/1');

    return  (
      <div className={containerClass}>
        <div className={coverHeaderClass}>
          <div className='border--bottom border--thick ib u-ph+ palm-ph-'>
            <h1 className='u-m0'>
              Matt Goo
            </h1>
          </div>
          <div className='text--large text--color-blue'>
            Adventurer - Web Developer
          </div>
        </div>
      </div>
    )
  }
};
