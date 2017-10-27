const initialUserState = {
  error: null,
};

const userReducer = (state = initialUserState, action = {}) => {
  switch(action.type){
    case '':
      return;
    default:
      return state;
  }
}

export default userReducer;