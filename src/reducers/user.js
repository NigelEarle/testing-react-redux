import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  ADD_EMAIL,
  ADD_PASSWORD,
} from '../actions/user';

const initialUserState = {
  error: null,
  emailToTest: 'user@email.com',
  passwordToTest: '12345',
  user: {
    email: '',
    password: ''
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
    case ADD_EMAIL:
      return {
        ...state,
        user: {
          ...state,
          email: concatString(state, 'email', action.data),
        }
        
      }
    case ADD_PASSWORD:
      return {
        ...state,
        user: {
          ...state,
          pasword: concatString(state, 'password', action.data)
        }
        
      }
    default:
      return state;
  }
}

const concatString = (state, key, char) => {
  return state.user[key].concat(char);
};

export default userReducer;
