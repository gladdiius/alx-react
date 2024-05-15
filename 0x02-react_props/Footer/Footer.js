import React from 'react';
import { getFullYear, getFooterCopy } from './utils';
import './Footer.css'
function Footer() {
  return (
    <footer>
      <div className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </div>
    </footer>
  );
}

export default Footer;
