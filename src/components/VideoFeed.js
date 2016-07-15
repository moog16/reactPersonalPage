import React from 'react';
import classnames from 'classnames';
import { List } from 'immutable';
import Masonry from 'masonry-layout';
import VideoThumbnailPlayer from './VideoThumbnailPlayer';

export default class VideoFeed extends React.Component {

  constructor(props) {
    super(props);
    this.state = { masonry: null, currentVideo: null };
  }

  componentWillMount() {
    this.props.fetchYoutubeVideos();
  }

  componentDidMount() {
    this.initMasonry();
  }

  componentWillReceiveProps(nextProps) {
    this.initMasonry(nextProps);
  }

  initMasonry(videos = this.props.videos) {
    const { masonry } = this.state;
    if(!videos.size || !List.isList(videos) && !masonry) {
      return;
    }

    const grid = document.querySelector('.video-feed');
    const msnry = new Masonry(grid, {
      itemSelector: '.layout__item',
      columnWidth: '.layout__item'
    });
    this.setState({ masonry: msnry });
  }

  hasLoadedVideo() {
    const { masonry } = this.state;
    masonry && masonry.layout();
  }

  setCurrentVideo(currentVideo) {
    this.setState({ currentVideo });
  }

  closeVideos() {
    const { currentVideo } = this.state;
    if(!currentVideo) { return; }
    currentVideo.closeVideo();
    this.setCurrentVideo(null);
  }

  render() {
    const { videos } = this.props;
    const { currentVideo } = this.state;
    if(!videos.size || !List.isList(videos)) {
      return null;
    }

    return <div className='video-feed-component u-p section'>
      <div className='bg--color-opaque--white-5'>
        <h2 className="u-mb u-p">
          Some Videos of My Life :)
        </h2>
      </div>
      <div className='video-feed layout'>
        { videos.map(video => <VideoThumbnailPlayer
          video={video}
          hasLoadedVideo={this.hasLoadedVideo.bind(this)}
          key={video.get('id')}
          closeVideos={this.closeVideos.bind(this)}
          setCurrentVideo={this.setCurrentVideo.bind(this)}/>) }
      </div>

      { this.renderVideoMask() }
    </div>
  }

  renderVideoMask() {
    const { currentVideo } = this.state;
    const maskClasses = classnames('video-mask', {'is-open': !!currentVideo});
    return <div className={maskClasses} onClick={this.closeVideos.bind(this)}>
      <i className='icon-close'></i>
    </div>
  }
};
