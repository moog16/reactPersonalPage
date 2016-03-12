import React from 'react';
import Splash from './Splash';
import AboutMe from './AboutMe';
import BlueDoor from './BlueDoor';
import Resume from './Resume';
import VideoFeed from './VideoFeed';
import Waypoint from 'react-waypoint';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchYoutubeVideos } from '../action-creators/action-creators';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowingAboutMeContainer: props.isShowingAboutMeContainer,
      scrollPos: props.scrollPos,
      isShowingVideoFeed: false
    };
  }

  render() {
    const backgroundClasses = classnames(['full-page', {
      'cover--bridge': this.state.isShowingVideoFeed,
      'cover--explorer': !this.state.isShowingVideoFeed
    }]);

    const { videos } = this.props;

    return  (
      <div>
        <div className={backgroundClasses}></div>
        <Splash
          isShowingAboutMeContainer={this.state.isShowingAboutMeContainer}
          scrollPos={this.state.scrollPos} />
        <AboutMe />
        <Waypoint
          onEnter={this._scrollSplashEnter.bind(this)}
          onLeave={this._scrollSplashLeave.bind(this)}
          threshold={0.8} />
        <BlueDoor
          isShowingAboutMeContainer={this.state.isShowingAboutMeContainer}
          scrollPos={this.state.scrollPos}/>
        <Resume/>
        <Waypoint
          onEnter={this._scrollVideoFeedEnter.bind(this)}
          onLeave={this._scrollVideoFeedLeave.bind(this)}
          threshold={1.5} />
        <VideoFeed
          fetchYoutubeVideos={this.props.fetchYoutubeVideos}
          videos={videos}  />
        <div className='footer'>
          <h6>
            Proudly developing since 2009
          </h6>
        </div>
      </div>
    )
  }

  _scrollSplashEnter() {
    this.setState({isShowingAboutMeContainer: true});
  }

  _scrollSplashLeave() {
    this.setState({isShowingAboutMeContainer: false});
  }

  _scrollVideoFeedEnter() {
    this.setState({isShowingVideoFeed: true});
  }

  _scrollVideoFeedLeave() {
    this.setState({isShowingVideoFeed: false});
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll.bind(this));
  }

  handleScroll(event) {
    var scrollTop = event.srcElement.body.scrollTop;
    if(!this.state.isShowingAboutMeContainer) {
      return;
    }

    this.setState({scrollPos: scrollTop});
  }
};

function mapStateToProps(state) {
  return {
    videos: state.get('videos')
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchYoutubeVideos
  }, dispatch);
};


export const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);
