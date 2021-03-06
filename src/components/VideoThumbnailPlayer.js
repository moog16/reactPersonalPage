import React from 'react';
import classnames from 'classnames';
import { List } from 'immutable';
import { getWinSize, disableScroll, enableScroll } from '../utils/tools';
import YouTubeIframeLoader from 'youtube-iframe';

export default class VideoThumbnailPlayer extends React.Component {
  videoEl: null

  constructor(props) {
    super(props);
    this.state = { isOpen : false, player: null };
  }

  componentDidMount() {
    const { video } = this.props;
    const height = parseInt(video.getIn(['thumbnail', 'height']));
    const width = parseInt(video.getIn(['thumbnail', 'width']));
    const videoId = video.get('id');

    YouTubeIframeLoader.load(YT => {
    	const player = new YT.Player(videoId, { height, width, videoId });
      this.setState({ player });
      this.videoEl.querySelector('img').style.minHeight = `${height}px`;
    }.bind(this));
  }

  closeVideo() {
    const { setCurrentVideo } = this.props;
    const { player } = this.state;
    this.setState({ isOpen: false });
    setCurrentVideo(null);
    player.stopVideo();
    enableScroll();
    return this.resetVideoStyles();
  }

  toggleVideoPlayer() {
    const { setCurrentVideo, closeVideos } = this.props;
    const { isOpen, id } = this.state;
    const { videoEl } = this;
    if(isOpen) { return; }
    closeVideos();
    setCurrentVideo(this);
    this.setState({ isOpen: true });
    const imgEl = videoEl.querySelector('img');

    const imgHeight = imgEl.offsetHeight;
    const imgWidth = imgEl.offsetWidth;
    const scale = this.getScale(imgHeight, imgWidth);
    const { top, left } = this.getNewTopAndLeft(imgHeight, imgWidth);
    disableScroll();

    this.setVideoStyles(top, left, scale);
  }

  resetVideoStyles() {
    const { videoEl } = this;
    videoEl.style.padding = '';
    setTimeout(() => {
      videoEl.style.position = '';
      videoEl.style.zIndex = '';
    }, 500);
    videoEl.style.transform = '';
  }

  setVideoStyles(top, left, scale) {
    const { videoEl } = this;
    videoEl.style.transform = `translate3d(${left}px, ${top}px, 0) scale3d(${scale},${scale},1)`;
    videoEl.style.padding = 0;
    videoEl.style.position = 'relative';
    videoEl.style.zIndex = 40;
  }

  getNewTopAndLeft(imgHeight, imgWidth) {
    const { videoEl } = this;
    const element = videoEl.querySelector('img');

    const { height, width } = getWinSize();
    const currentTop = videoEl.offsetTop;
    const top = (height/2 - currentTop - imgHeight/2) + window.scrollY;
    const left = width/2 - element.parentElement.offsetLeft - imgWidth/2;
    return { top, left };
  }

  getScale(imgHeight, imgWidth) {
    const { height, width } = getWinSize();
    let scale = Math.floor(height/imgHeight);
    if(scale*imgWidth > width || scale*imgHeight > height) {
      scale = Math.floor(width/imgWidth);
    }

    if(scale > 2) {
      return scale - 1;
    }
    return scale === 0 ? 1: scale;
  }

  render() {
    const { video, hasLoadedVideo } = this.props;
    const { isOpen } = this.state;
    const videoClasses = classnames('video-feed__video layout__item u-1/3 u-1/2-lap u-1/1-palm', {'is-open': isOpen});

    return <div className={videoClasses} ref={videoEl => this.videoEl = videoEl}>
      <div className='relative ib' onClick={this.toggleVideoPlayer.bind(this)}>
          <img src={video.getIn(['thumbnail', 'url'])}
            alt={video.get('title')}
            onLoad={hasLoadedVideo} />
          <div id={video.get('id')} className='video-feed__youtube-video'></div>
          <span className='video-feed__title text--medium'>
          {video.get('title')}
        </span>
      </div>
    </div>
  }
};
