import React from 'react';
import { fromJS } from 'immutable';

const youtubeBaseUrl = 'https://www.youtube.com/embed/';

class VideoFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: []
    }
  }

  componentDidMount() {
    fetch('https://www.googleapis.com/youtube/v3/playlistItems?part=contentDetails&maxResults=10&playlistId=PLHwBTpKdW82AAYsooGDKrOg9M4iMgCWeU&key=AIzaSyAMk2zwBgr6r1wS3fjSLtOYzTsTi7rpifs', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    }).then((response) => {
      response.json().then((data) => {
        const playlistItems = data.items;
        this.setState({videos: fromJS(playlistItems)});
      });
    });
  }

  render() {
    const videos = this.state.videos;
    return  (
      <div>
        {
          videos.size ?
          <div className='u-p++ u-p-palm text--center'>
            <div className='layout u-p u-pl0 bg--color-opaque--white'>
              <h2 className="u-mb+">
                Some Videos of My Life :)
              </h2>
              {
                videos.map(video => {
                  return (<div className='layout__item u-1/3 u-1/2-lap u-1/1-palm' key={video.get('id')}>
                    <iframe className="youtube-video u-1/1" src={`${youtubeBaseUrl}${video.getIn(['contentDetails', 'videoId'])}`}></iframe>
                  </div>)
                }, this)
              }
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
