import React from 'react';
import classNames from 'classnames';

class Splash extends React.Component {
  render() {
    var coverHeaderClass = classNames(
      'cover__header', 'box--grey', 'ib', 'u-p', 'fixed');

    var coverHeaderStyle = this._getCoverHeaderStyle();

    return  (
      <div className='text--center bg--color-opaque full-page'>
        <div className={coverHeaderClass} style={coverHeaderStyle}>
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

  _getCoverHeaderStyle() {
    var vertTranslation = 0;
    if(this.props.isShowingAboutMeContainer || this.props.scrollPos > 900) {
      vertTranslation = 200-this.props.scrollPos;
    }
    return {
      msTransform: `translate(0 ,${vertTranslation}px)`, /* IE 9 */
      WebkitTransition: `translate(0 ,${vertTranslation}px)`, /* Safari */
      transform: `translate(0 ,${vertTranslation}px)`
    }
  }
};

Splash.propTypes = {};
Splash.defaultProps = {};

export default Splash;
