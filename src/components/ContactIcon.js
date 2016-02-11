import React from 'react';
import classNames from 'classnames';

class ContactIcon extends React.Component {
  render() {
    let iconClass = classNames(
      [`icon-${this.props.icon}`]);
    let contactClass = classNames(
      'layout__item', 'u-1/3', 'animation--ease', 'animate--transparency', {'transparent': this.props.hide});
    return  (
      <div className={contactClass}>
        <a href={this.props.link} className='link--color-light'>
          <i className={iconClass}></i>
          <div className='ib u-ml-'>{this.props.icon}</div>
        </a>
      </div>
    )
  }
};

ContactIcon.propTypes = {
  icon: React.PropTypes.string,
  hide: React.PropTypes.bool
};
ContactIcon.defaultProps = {
  icon: '',
  hide: false
};

export default ContactIcon;
