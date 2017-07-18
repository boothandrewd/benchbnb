import React from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state);
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  formDetails() {
    return this.props.formType === '/signup' ? (
      ['Sign Up', '/signin', 'Sign In']
    ) : (
      ['Sign In', '/signup', 'Sign Up']
    );
  }

  render() {
    if (this.props.loggedIn) {
      return <Redirect to='/'/>;
    }

    let [headingText, switchLink, linkText] = this.formDetails();

    return (
      <form>
        <h2>{headingText}</h2>
        <Link to={switchLink}>{linkText}</Link>

        <label>Username
          <input
            type='text'
            onChange={this.update('username')}
            value={this.state.username}
          />
        </label>

        <label>Password
          <input
            type='text'
            onChange={this.update('password')}
            value={this.state.password}
          />
        </label>

        <button onClick={this.handleSubmit}>Submit</button>
      </form>
    );
  }
}

export default withRouter(SessionForm);
