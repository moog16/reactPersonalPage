import React from 'react';
import Splash from '../Splash';
import AboutMe from '../AboutMe/AboutMe';
import BlueDoor from '../BlueDoor';
import Waypoint from 'react-waypoint';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowingAboutMeContainer: props.isShowingAboutMeContainer,
      scrollPos: props.scrollPos
    };
  }

  render() {
    return  (
      <div>
        <div className='cover--explorer full-page'></div>
        <Splash
          isShowingAboutMeContainer={this.state.isShowingAboutMeContainer}
          scrollPos={this.state.scrollPos}/>
        <AboutMe />
        <Waypoint
          onEnter={this._scrollSplashEnter.bind(this)}
          onLeave={this._scrollSplashLeave.bind(this)}
          threshold={0.2} />
        <BlueDoor
          isShowingAboutMeContainer={this.state.isShowingAboutMeContainer}
          scrollPos={this.state.scrollPos}/>
      </div>
    )
  }

  _scrollSplashEnter() {
    this.setState({isShowingAboutMeContainer: true});
  }

  _scrollSplashLeave() {
    this.setState({isShowingAboutMeContainer: false});
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll.bind(this));
  }

  handleScroll(event) {
    if(!this.state.isShowingAboutMeContainer) {
      return;
    }

    var scrollTop = event.srcElement.body.scrollTop;
    this.setState({scrollPos: scrollTop});
  }
};

Home.propTypes = {
  isShowingAboutMeContainer: React.PropTypes.bool,
  scrollPos: React.PropTypes.number
};
Home.defaultProps = {
  isShowingAboutMeContainer: false,
  scrollPos: 0
};

export default Home;
