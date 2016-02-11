import React from 'react';
import { fromJS } from 'immutable';

const youtubeUrl = 'https://www.youtube.com/watch?v=';

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
        console.log(playlistItems)
        this.setState({videos: fromJS(playlistItems)});
      });
    });
  }

  render() {
    const videos = this.state.videos;
    return  (
      <div>
        <div className='half-page bg--color-red u-p++ palm-p+ text--center'>
          <div className='layout'>
            {
              videos.size ? videos.map(video => {
                return (<div className='layout__item u-1/3 u-1/2-lap u-1/1-palm' key={video.get('id')}>
                  {video}
                </div>)
              }, this) : null
            }
          </div>
        </div>
      </div>
    )
  }


};

VideoFeed.propTypes = {
};
VideoFeed.defaultProps = {
};

export default VideoFeed;
