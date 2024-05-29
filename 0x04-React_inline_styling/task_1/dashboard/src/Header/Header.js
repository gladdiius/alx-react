import React from 'react';
import holbertonLogo from './Holberton_Logo.jpg';
import {StyleSheet, css} from 'aphrodite'
function Header() {
  return (
    <header>
      <div className={css(style.AppHeader)}>
        <img src={holbertonLogo} className={css(style.hol_logo)} alt="Holberton Logo" />
        <h1 className={css(style.AppheaderH1)}>School dashboard</h1>
      </div>
    </header>
  );
}

const style = StyleSheet.create({
  hol_logo:{
    height: '100px',
    width: '100px'
  },
  
  AppHeader:{
    display: 'flex',
    alignItems: 'center',
    margin: '0',
    marginBottom: '30px',
    height: '35vh'
  },
  
  AppheaderH1:{
    color:'hsl(9, 87%, 49%)'
  },

})

export default Header;
