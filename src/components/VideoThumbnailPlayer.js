import React from 'react';
import classnames from 'classnames';
import { List } from 'immutable';
import { getWinSize } from '../utils/tools';

export default class VideoThumbnailPlayer extends React.Component {
  videoEl: null

  constructor(props) {
    super(props);
    this.state = { isOpen : false };
  }

  closeVideo() {
    const { setCurrentVideo } = this.props;

    this.setState({ isOpen: false });
    setCurrentVideo(null);
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
    const element = videoEl.querySelector('iframe');

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
    const height = parseInt(video.getIn(['thumbnail', 'height']));
    const width = parseInt(video.getIn(['thumbnail', 'width']));
    const videoClasses = classnames('video-feed__video layout__item u-1/3 u-1/2-lap u-1/1-palm', {'is-open': isOpen});

    return <div className={videoClasses} ref={videoEl => this.videoEl = videoEl}>
      <div className='relative ib' onClick={this.toggleVideoPlayer.bind(this)}>
          <img src={video.getIn(['thumbnail', 'url'])}
            alt={video.get('title')}
            onLoad={hasLoadedVideo} />
          <iframe frameBorder='0'
            src={video.get('url')}
            className='video-feed__youtube-video'
            height={height}
            width={width} />
          <span className='video-feed__title text--medium'>
          {video.get('title')}
        </span>
      </div>
    </div>
  }
};
