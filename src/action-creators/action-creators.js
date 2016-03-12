export function setYouTubeVideos(videos) {
  return {
    type: 'SET_YOUTUBE_VIDEOS',
    videos
  }
};

export function setDinnerBlog(blog) {
  return {
    type: 'SET_DINNER_BLOG',
    blog
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


export function fetchDinnerBlog() {
  return dispatch => {
    fetch('/v1/tumblr/52dinners').then(res => {
      res.json().then( blog => {
        dispatch(setDinnerBlog(blog));
      });
    });
  }
};
