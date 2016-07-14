import React from 'react';
import Splash from './Splash';
import AboutMe from './AboutMe';
import CookingBlog from './CookingBlog';
import Resume from './Resume';
import VideoFeed from './VideoFeed';
import Waypoint from 'react-waypoint';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchYoutubeVideos, fetchDinnerBlog } from '../action-creators/action-creators';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollPos: null,
      isShowingVideoFeed: false
    };
  }

  render() {
    const backgroundClasses = classnames(['full-page', {
      'bg--color-blue cover-bg': this.state.isShowingVideoFeed,
      'cover--explorer': !this.state.isShowingVideoFeed
    }]);

    const { videos } = this.props;

    return  <div>
      <div className={backgroundClasses}></div>
      <Splash />
      <AboutMe />
      <CookingBlog
        fetchDinnerBlog={this.props.fetchDinnerBlog}
        dinnerBlog={this.props.dinnerBlog} />
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
  }

  _scrollVideoFeedEnter() {
    this.setState({isShowingVideoFeed: true});
    this.setState({ scrollPos: window.scrollY });
  }

  _scrollVideoFeedLeave() {
    if(this.state.scrollPos < window.scrollY) {
      return;
    }
    this.setState({isShowingVideoFeed: false});
  }
};

function mapStateToProps(state) {
  return {
    videos: state.get('videos'),
    dinnerBlog: state.get('dinnerBlog')
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchYoutubeVideos,
    fetchDinnerBlog
  }, dispatch);
};


export const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);
