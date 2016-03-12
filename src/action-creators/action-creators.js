export function setYouTubeVideos(videos) {
  return {
    type: 'SET_YOUTUBE_VIDEOS',
    videos
  }
};


export function fetchYoutubeVideos() {
  return dispatch => {
    fetch('/v1/youtube').then(res => {
      res.json().then( videos => {
        dispatch(setYouTubeVideos(videos));
      });
    });
  }
};
