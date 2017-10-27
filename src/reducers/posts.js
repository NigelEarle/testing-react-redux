const initialPostsState = {
  error: null,
};

const postsReducer = (state = initialPostsState, action = {}) => {
  switch(action.type){
    case '':
    default:
      return state;
  }
}

export default postsReducer;
