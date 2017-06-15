const charactersReducer = (state = {username:'Brian', logged:false}, action) => {
  switch (action.type) {
    case 'LOG':
      state = {
        ...state,
        logged: true
      };
      break;
    case 'UNLOG':
      state = {
        ...state,
        logged: false
      };
      break;
    case 'CHANGE_USER':
      state = {
        ...state,
        username: action.payload
      };
      break;
  }
  return state;
};

export default charactersReducer;