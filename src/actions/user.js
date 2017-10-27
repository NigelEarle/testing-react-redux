export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const ADD_EMAIL = 'ADD_EMAIL';
export const ADD_PASSWORD = 'ADD_PASSWORD';


export const submitLoginSuccess = () => {
  return {
    type: LOGIN_SUCCESS,
  }
}

export const submitLoginFail = () => {
  return {
    type: LOGIN_FAIL
  }
}

export const addEmail = (char) => {
  return {
    type: ADD_EMAIL,
    data: char
  };
}

export const addPassword = (char) => {
  return {
    type: ADD_PASSWORD,
    data: char
  }
}