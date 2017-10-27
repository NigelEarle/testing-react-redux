import {
  LOGIN_SUCCESS,
  LOGIN_FAIL
} from '../actions/user';

const initialUserState = {
  error: null,
  user: {
    email: 'user@email.com',
    password: '123456'
  }
};

const userReducer = (state = initialUserState, action = {}) => {
  switch(action.type){
    case LOGIN_SUCCESS:
      return state;
    case LOGIN_FAIL:
      return {
        ...state,
        error: 'Wrong Email or Password. Try again.',
      }
    default:
      return state;
  }
}

export default userReducer;
