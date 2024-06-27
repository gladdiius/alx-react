import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Footer = ({ user }) => {
  return (
    <footer>
      <p>&copy; 2020 - Holberton School</p>
      {user && (
        <p>
          Logged in as: {user.email}
        </p>
      )}
    </footer>
  );
};

Footer.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string,
  }),
};

const mapStateToProps = (state) => ({
  user: state.uiReducer.get('user'), // Adjust according to your state structure
});

export default connect(mapStateToProps)(Footer);
