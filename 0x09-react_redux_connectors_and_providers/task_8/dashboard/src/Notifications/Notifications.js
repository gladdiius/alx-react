// Notifications.js

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import { setNotificationFilter } from '../actions/notificationActionCreators';
import { getUnreadNotificationsByType } from '../selectors/notificationSelector';

const Notifications = ({ notifications, setFilter }) => {
  useEffect(() => {
    // Any initializations or side effects can be placed here
  }, []);

  const handleSetFilter = (filter) => {
    setFilter(filter);
  };

  return (
    <div className={css(styles.notifications)}>
      <p>Here is the list of notifications</p>
      <ul className={css(styles.notificationsList)}>
        {notifications.map(notification => (
          <li key={notification.get('id')}>
            {notification.get('value')}
          </li>
        ))}
      </ul>
      <div className={css(styles.buttons)}>
        <button onClick={() => handleSetFilter('urgent')}>
          ‼️ Set Urgent Filter
        </button>
        <button onClick={() => handleSetFilter('default')}>
          💠 Set Default Filter
        </button>
      </div>
    </div>
  );
};

const styles = StyleSheet.create({
  notifications: {
    border: '1px solid #ccc',
    padding: '10px',
    borderRadius: '5px',
    marginBottom: '20px',
  },
  notificationsList: {
    listStyleType: 'none',
    padding: '0',
  },
  buttons: {
    marginTop: '10px',
  },
});

Notifications.propTypes = {
  notifications: PropTypes.object.isRequired, // Assuming notifications is an ImmutableJS object
  setFilter: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  notifications: getUnreadNotificationsByType(state),
});

const mapDispatchToProps = {
  setFilter: setNotificationFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);
