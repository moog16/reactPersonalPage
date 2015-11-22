import React from 'react';
import classNames from 'classnames';

class Splash extends React.Component {
  render() {
    var coverHeaderClass = classNames(
      'cover__header', 'box--grey', 'ib', 'u-mt++', 'u-p', 'fixed', 'animation--ease-out');
    var vertTranslation = 0;
    if(this.props.isShowingAboutMeContainer) {
      vertTranslation = 350-this.props.scrollPos;
    }
    var coverHeaderStyle = {
      msTransform: `translate(0 ,${vertTranslation}px)`, /* IE 9 */
      WebkitTransition: `translate(0 ,${vertTranslation}px)`, /* Safari */
      transform: `translate(0 ,${vertTranslation}px)`
    }

    return  (
      <div className='text--center bg--color-opaque full-page'>
        <div className={coverHeaderClass} style={coverHeaderStyle}>
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
};

Splash.propTypes = {};
Splash.defaultProps = {};

export default Splash;
