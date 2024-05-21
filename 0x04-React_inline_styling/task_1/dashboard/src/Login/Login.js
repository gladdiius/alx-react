import React from 'react';
import { StyleSheet, css } from 'aphrodite';

function LoginForm({ handleLabelClick }) {
  return (
    <div className={css(styles.appBody)}>
      <p>Login to access the full dashboard</p>
      <div className={css(styles.form)}>
        <div className={css(styles.inputGroup)}>
          <label
            htmlFor="email"
            onClick={() => handleLabelClick('email')}
            className={css(styles.label)}
          >
            Email:
          </label>
          <input id="email" type="text" className={css(styles.input)} />
        </div>
        <div className={css(styles.inputGroup)}>
          <label
            htmlFor="password"
            onClick={() => handleLabelClick('password')}
            className={css(styles.label)}
          >
            Password:
          </label>
          <input id="password" type="text" className={css(styles.input)} />
        </div>
      </div>
    </div>
  );
}

const styles = StyleSheet.create({
  appBody: {
    marginLeft: '30px',
    height: '70vh',
  },
  form: {
    display: 'flex',
    flexDirection: 'row',
  },
  inputGroup: {
    marginRight: '10px',
  },
  label: {
    cursor: 'pointer',
  },
  input: {
    display: 'block',
  },
  closeImage: {
    width: '10px',
    height: '10px',
  },
  nthChild1: {
    color: 'blue',
  },
  nthChild2: {
    color: 'red',
  },
  nthChild3: {
    color: 'red',
  },
});

export default LoginForm;
