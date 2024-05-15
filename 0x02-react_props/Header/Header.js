import React from 'react';
import holbertonLogo from './holbertonLogo.jpg';
import './Header.css'
function Header() {
  return (
    <header>
      <div className="App-header">
        <img src={holbertonLogo} className="hol_logo" alt="Holberton Logo" />
        <h1>School dashboard</h1>
      </div>
    </header>
  );
}

export default Header;
