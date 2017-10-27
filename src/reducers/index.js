import { combineReducers } from 'redux';

import userReducer from './user';
import postsReducer from './posts';

const rootReducer = combineReducers({
  userReducer,
  postsReducer,
});

export default rootReducer;