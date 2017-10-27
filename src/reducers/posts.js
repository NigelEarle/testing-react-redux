import {
  POSTS_FETCH_SUCCESS,
  POSTS_FETCH_FAIL
} from '../actions/posts';

const initialPostsState = {
  error: null,
  posts: []
};

const postsReducer = (state = initialPostsState, action = {}) => {
  switch(action.type){
    case POSTS_FETCH_SUCCESS:
      return state;
    case POSTS_FETCH_FAIL:
      return {
        ...state,
        error: 'Something went wrong!',
      }
    default:
      return state;
  }
}

export default postsReducer;
