import { combineReducers } from 'redux';
import { sessionReducer } from './root_reducer';

export default combineReducers({
  session: sessionReducer
});
