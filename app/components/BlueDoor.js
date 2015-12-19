import React from 'react';
import YouTubeFeed from './YouTubeFeed';
import Specialties from './Specialties';

class BlueDoor extends React.Component {
  render() {
    return  (
      <div className='full-page'>
        <div className='cover--blue-door'>
          <Specialties />
        </div>
      </div>
    )
  }
};

BlueDoor.propTypes = {
};
BlueDoor.defaultProps = {
};

export default BlueDoor;
