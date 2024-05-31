import React, { useContext } from 'react';
import { StyleSheet, css } from 'aphrodite';
import AppContext from './AppContext'; // Update this import based on the actual path
import { getFullYear, getFooterCopy } from './utils';

function Footer() {
  const { user } = useContext(AppContext);

  return (
    <footer className={css(style.footer)}>
      <div className={css(style.footerContent)}>
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
        {user.isLoggedIn && (
          <p>
            <a href="/contact">Contact us</a>
          </p>
        )}
      </div>
    </footer>
  );
}

const style = StyleSheet.create({
  footer: {
    borderTop: '3px solid red',
    textAlign: 'center',
  },
  footerContent: {
    padding: '10px 0',
  },
});

export default Footer;
