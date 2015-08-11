import React from 'react';

class TimelineLeft extends React.Component {
  render() {
    return (
      <div className="u-p">
        <div className="circle timeline__content">
          <img src="assets/images/sunset_bridge.jpg" className="sunset--bridge"/>
        </div>
      </div>
    )
  }

  handleResize(e) {
    console.log('heiiii')
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }
};

export default TimelineLeft;
