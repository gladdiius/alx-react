import React from 'react';
import holbertonLogo from './Holberton_Logo.jpg';
import { StyleSheet, css } from 'aphrodite';

function Header() {
  return (
    <header className={css(styles.headerWrapper)}>
      <div className={css(styles.appHeader)}>
        <img src={holbertonLogo} className={css(styles.holLogo)} alt="Holberton Logo" />
        <h1 className={css(styles.headerTitle)}>School dashboard</h1>
      </div>
    </header>
  );
}

const styles = StyleSheet.create({
  headerWrapper: {
    borderBottom: '3px solid hsl(9, 87%, 49%)',
    margin: 0,
  },
  appHeader: {
    display: 'flex',
    alignItems: 'center',
    margin: 0,
    marginBottom: '30px',
    height: '35vh',
  },
  holLogo: {
    height: '100px',
    width: '100px',
  },
  headerTitle: {
    color: 'hsl(9, 87%, 49%)',
    marginLeft: '20px',
  },
});

export default Header;
