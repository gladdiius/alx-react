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
      <button className={css(styles.button)}>Login</button>
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
    flexDirection: 'column',
    '@media (min-width: 900px)': {
      flexDirection: 'row',
    },
  },
  inputGroup: {
    marginBottom: '10px',
    '@media (min-width: 900px)': {
      marginRight: '10px',
      marginBottom: '0',
    },
  },
  label: {
    cursor: 'pointer',
  },
  input: {
    display: 'block',
    width: '100%',
    '@media (min-width: 900px)': {
      width: 'auto',
    },
  },
  button: {
    display: 'block',
    marginTop: '10px',
    '@media (min-width: 900px)': {
      marginTop: '0',
    },
  },
});

export default LoginForm;
