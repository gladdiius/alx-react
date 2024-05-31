import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };

    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
  }

  handleChangeEmail(event) {
    this.setState({ email: event.target.value });
  }

  handleChangePassword(event) {
    this.setState({ password: event.target.value });
  }

  handleLoginSubmit(event) {
    event.preventDefault();
    const { email, password } = this.state;
    this.props.logIn(email, password);
  }

  render() {
    const { email, password } = this.state;
    const enableSubmit = email !== '' && password !== '';

    return (
      <div className={css(style.AppBody)}>
        <p>Login to access the full dashboard</p>
        <form onSubmit={this.handleLoginSubmit}>
          <div className='form' style={{ display: 'flex', flexDirection: 'row' }}>
            <div style={{ marginRight: '10px' }}>
              <label htmlFor="email">Email:</label>
              <input id="email" type='text' value={email} onChange={this.handleChangeEmail} />
            </div>

            <div style={{ marginRight: '10px' }}>
              <label htmlFor="password">Password:</label>
              <input id="password" type='text' value={password} onChange={this.handleChangePassword} />
            </div>

            <input type='submit' value='Submit' disabled={!enableSubmit} />
          </div>
        </form>
      </div>
    );
  }
}

const style = StyleSheet.create({
  AppBody: {
    marginLeft: '30px',
    height: '70vh'
  }
});

export default Login;
