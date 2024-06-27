import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import holbertonLogo from './holbertonLogo.jpg';
import { logout } from '../actions/uiActionCreators';
import './Header.css';

const Header = ({ user, logout }) => {
  return (
    <header>
      <div className="App-header">
        <img src={holbertonLogo} className="hol_logo" alt="Holberton Logo" />
        <h1>School dashboard</h1>
        {user && (
          <div id="logoutSection">
            <span>Welcome, {user.email} </span>
            <button onClick={logout}>Logout</button>
          </div>
        )}
      </div>
    </header>
  );
};

Header.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string,
  }),
  logout: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.uiReducer.get('user'), // Adjust according to your state structure
});

const mapDispatchToProps = {
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
