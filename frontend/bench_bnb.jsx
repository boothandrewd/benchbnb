import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

// TODO: Remove testing imports
import * as actions from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();

  // TODO: Remove testing window objects
  window.user = {
    username: 'adbooth',
    password: '123456'
  };
  window.signUp = actions.signUp;
  window.signIn = actions.signIn;
  window.signOut = actions.signOut;
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
