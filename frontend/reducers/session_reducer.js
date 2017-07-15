import {
  RECEIVE_CURRENT_USER,
  RECEIVE_ERRORS
} from '../actions/session_actions';

const RootReducer = (state, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:

    case RECEIVE_ERRORS:

    default:

  }
};

export default RootReducer;
