import { createStore, combineReducers, applyMiddleware } from 'redux';

import characters from "./reducers/characters.reducer";
import user from "./reducers/user.reducer";

export default createStore(
  combineReducers({characters, user}), 
  {});