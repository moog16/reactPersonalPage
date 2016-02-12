import React from 'react';
import classNames from 'classnames';

class Splash extends React.Component {

  render() {
    let containerClass = classNames(
      'text--center', 'bg--color-opaque', 'full-page');
    let coverHeaderClass = classNames(
      'cover__header', 'box--grey', 'bg--color-opaque--white', 'ib', 'u-p', 'fixed', {'hide': this.props.shouldHideNameHeader});

    let coverHeaderStyle = this._getCoverHeaderStyle();

    return  (
      <div className={containerClass}>
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

Splash.propTypes = {
  isShowingAboutMeContainer: React.PropTypes.bool,
  scrollPos: React.PropTypes.number,
  shouldHideNameHeader: React.PropTypes.bool
};
Splash.defaultProps = {
  isShowingAboutMeContainer: false,
  scrollPos: 0,
  shouldHideNameHeader: true
};

export default Splash;
