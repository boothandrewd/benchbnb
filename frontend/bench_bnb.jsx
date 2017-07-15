import React from 'react';
import ReactDOM from 'react-dom';

// TODO: Remove testing imports
// import * as APIUtil from './util/session_api_util';
import * as actions from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<h1>Welcome to BenchBnB</h1>, root);

  // TODO: Remove testing window objects
  window.user = {
    username: 'adbooth',
    password: '123456'
  };
  // window.signUp = APIUtil.signUp;
  // window.signIn = APIUtil.signIn;
  // window.signOut = APIUtil.signOut;
  window.signUp = actions.signUp;
  window.signIn = actions.signIn;
  window.signOut = actions.signOut;
});
