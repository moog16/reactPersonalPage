import React from 'react';
import { fromJS } from 'immutable';

class VideoFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: []
    }
  }

  componentDidMount() {
    fetch('/v1/youtube').then(res => {
      res.json().then( videos => this.setState({videos: fromJS(videos)}) );
    });
  }

  render() {
    const videos = this.state.videos;
    return  (
      <div>
        {
          videos.size ?
          <div className='u-p section'>
            <div className='bg--color-opaque--white'>
              <h2 className="u-mb u-p">
                Some Videos of My Life :)
              </h2>
              <div className='layout layout--small u-p'>
                {
                  videos.map(video => {
                    return (<div className='layout__item u-1/2 u-1/2-lap u-1/1-palm' key={video.get('id')}>
                      <iframe className="youtube-video u-1/1" src={video.get('url')}></iframe>
                    </div>)
                  }, this)
                }
              </div>

            </div>
          </div> : null
        }
      </div>
    )
  }


};
VideoFeed.propTypes = {
};
VideoFeed.defaultProps = {
};

export default VideoFeed;
