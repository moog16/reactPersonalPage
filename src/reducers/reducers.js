import { Map, List, fromJS } from 'immutable';

const initialData = Map({
  videos: List()
});

export default function(state = initialData, action = {}) {
  switch (action.type) {
    case 'SET_YOUTUBE_VIDEOS':
      return state.set('videos', fromJS(action.videos));

    default:
      return state;
  }
};
