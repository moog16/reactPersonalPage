import React from 'react';
import Splash from './Splash';
import AboutMe from './AboutMe';
import BlueDoor from './BlueDoor';
import Resume from './Resume';
import VideoFeed from './VideoFeed';
import Waypoint from 'react-waypoint';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowingAboutMeContainer: props.isShowingAboutMeContainer,
      scrollPos: props.scrollPos,
      shouldHideNameHeader: false
    };
  }

  render() {
    return  (
      <div>
        <div className='cover--explorer full-page'></div>
        <Splash
          isShowingAboutMeContainer={this.state.isShowingAboutMeContainer}
          scrollPos={this.state.scrollPos}
          shouldHideNameHeader={this.state.shouldHideNameHeader}/>
        <AboutMe />
        <Waypoint
          onEnter={this._scrollSplashEnter.bind(this)}
          onLeave={this._scrollSplashLeave.bind(this)}
          threshold={0.2} />
        <BlueDoor
          isShowingAboutMeContainer={this.state.isShowingAboutMeContainer}
          scrollPos={this.state.scrollPos}/>
        <Resume/>
        <VideoFeed />
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
    var scrollTop = event.srcElement.body.scrollTop;
    var shouldHideNameHeader = false;
    if(scrollTop > window.innerHeight) {
      shouldHideNameHeader = true;
    }
    this.setState({shouldHideNameHeader: shouldHideNameHeader});

    if(!this.state.isShowingAboutMeContainer) {
      return;
    }

    this.setState({scrollPos: scrollTop});
  }
};

export default Home;
