import { Map, List, fromJS } from 'immutable';

const initialData = Map({
  videos: List(),
  dinnerBlog: Map()
});

export default function(state = initialData, action = {}) {
  switch (action.type) {
    case 'SET_YOUTUBE_VIDEOS':
      return state.set('videos', fromJS(action.videos));

    case 'SET_DINNER_BLOG':
      return state.set('dinnerBlog', fromJS(action.blog));

    default:
      return state;
  }
};
