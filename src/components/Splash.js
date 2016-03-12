import React from 'react';
import classnames from 'classnames';
import Waypoint from 'react-waypoint';

export default class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowingHeader: true
    }
  }

  render() {
    const isShowingHeader = this.state.isShowingHeader;
    const coverContainerClass = classnames(
      'cover__header', 'ib', 'u-1/1',
      {
         'u-p': isShowingHeader,
         'u-p--': !isShowingHeader,
        'fixed': !isShowingHeader
      });
    const coverHeaderClass = classnames(
      'ib', 'u-ph+', 'palm-ph-', {
        'border--bottom': isShowingHeader,
        'border--thick': isShowingHeader
      }
    )

    return  (
      <div className={classnames('bg--color-opaque', 'full-page', {'text--center': isShowingHeader})}>
        <Waypoint
          onEnter={this._onHeaderEnter.bind(this)}
          onLeave={this._onHeaderLeave.bind(this)}
          threshold={0} />
        <div className={coverContainerClass}>
          <div className={coverHeaderClass}>
            <h1 className='u-m0 ib'>
              Matt Goo
            </h1>
          </div>
          <div className='cover__subheader text--color-blue'>
            Adventurer - Web Developer
          </div>
        </div>
      </div>
    )
  }

  _onHeaderLeave() {
    this.setState({isShowingHeader: false});
  }

  _onHeaderEnter() {
    this.setState({isShowingHeader: true});
  }
};
