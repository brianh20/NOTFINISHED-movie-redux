const charactersReducer = (state = {chars: []}, action) => {
  switch (action.type) {
    case 'LOAD_CHARS':
      state = {
        ...state,
        chars: action.payload
      };
      break;
  }

  console.log(state);
  return state;
};

export default charactersReducer;