import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchNotifications } from '../actions/notificationActionCreators';

const Notifications = ({
  listNotifications,
  fetchNotifications,
}) => {
  useEffect(() => {
    fetchNotifications();
  }, [fetchNotifications]);

  return (
    <div>
      <h2>Notifications</h2>
      <ul>
        {listNotifications.map(notification => (
          <li key={notification.get('id')}>
            {notification.get('value')}
          </li>
        ))}
      </ul>
    </div>
  );
};

Notifications.propTypes = {
  listNotifications: PropTypes.object.isRequired,
  fetchNotifications: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  listNotifications: state.getIn(['notifications', 'notifications']),
});

const mapDispatchToProps = {
  fetchNotifications,
};

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);
