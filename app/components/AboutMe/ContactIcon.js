import React from 'react';
import classNames from 'classnames';

class ContactIcon extends React.Component {


  render() {
    var contactClass = classNames(
      [`icon-${this.props.icon}`]);
    return  (
      <div className='layout__item u-1/3'>
        <a href={this.props.link} className='link--color-light'>
          <i className={contactClass}></i>
          <div className='ib u-ml-'>{this.props.icon}</div>
        </a>
      </div>
    )
  }
};

ContactIcon.propTypes = {
  icon: React.PropTypes.string
};
ContactIcon.defaultProps = {
  icon: ''
};

export default ContactIcon;
