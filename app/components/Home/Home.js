import React from 'react';
import Splash from '../Splash';

class Home extends React.Component {
  render() {
    return  (
      <div>
        <div className="cover--explorer full-page">
        </div>
        <Splash />
        <div className="full-page">
          meow
        </div>
      </div>
    )
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    console.log('handling scroll')
  }
};

export default Home;
