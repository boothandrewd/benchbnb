import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

const Auth = ({ component: Component, path, loggedIn }) => (
  <Route
    path={path}
    render={props => (
      !loggedIn ? (
        <Component {...props}/>
      ) : (
        <Redirect to='/'/>
      )
    )}
  />
);

const mapStateToProps = state => ({
  loggedIn: state.session.currentUser !== null
});

export default withRouter(connect(mapStateToProps, null)(Auth));
