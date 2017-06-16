const charactersReducer = (state = {characters: []}, action) => {
  switch (action.type) {
    case 'LOAD_CHARACTERS':
      state = {
        ...state,
        characters: action.payload
      };
      break;
  }
  return state;
};

export default charactersReducer;