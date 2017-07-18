import React from 'react';
import GreetingContainer from './greeting/greeting_container';
// import { Route } from 'react-router-dom';
import SessionFormContainer from './session/session_form_container';
import AuthRoute from '../util/route_util';

export default () => (
  <div>
    <header>
      <h1>Bench BnB</h1>
      <GreetingContainer/>
    </header>

    <AuthRoute path='/signin' component={SessionFormContainer}/>
    <AuthRoute path='/signup' component={SessionFormContainer}/>
  </div>
);
