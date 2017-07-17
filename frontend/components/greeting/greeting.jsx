import React from 'react';
import { Link } from 'react-router-dom';

export default class Greeting extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signOut();
  }

  render() {
    const currentUser = this.props.currentUser;

    return currentUser ? (
      <div>
        <h2>Welcome {currentUser.username}</h2>
        <button onClick={this.handleSubmit}>Sign Out</button>
      </div>
    ) : (
      <div>
        <Link to='/signup'>Sign Up</Link>
        <br/>
        <Link to='/signin'>Sign In</Link>
      </div>
    );
  }
}
