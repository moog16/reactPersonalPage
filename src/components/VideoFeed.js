import React from 'react';

export default class VideoFeed extends React.Component {
  componentWillMount() {
    this.props.fetchYoutubeVideos();
  }

  render() {
    const videos = this.props.videos;
    return  (
      <div>
        {
          videos.size ?
          <div className='u-p section'>
            <div className='bg--color-opaque--white-5'>
              <h2 className="u-mb u-p">
                Some Videos of My Life :)
              </h2>
            </div>
            <div>
              {
                videos.map(video => {
                  return (
                    <div className='content-row u-1/1 u-p u-mb' key={video.get('id')}>
                      <a target='_blank' href={video.get('url')} className='text--color-black'>
                        <div className='layout'>
                          <div className='layout__item u-1/3'>
                            <iframe className="youtube-video u-1/1" frameBorder="0" src={video.get('url')}></iframe>
                          </div>
                          <div className='layout__item u-2/3'>
                            <span className='text--medium'>
                              {video.get('title')}
                            </span>
                            <div>
                              {video.get('description')}
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  )
                }, this)
              }
            </div>

          </div> : null
        }
      </div>
    )
  }
};
