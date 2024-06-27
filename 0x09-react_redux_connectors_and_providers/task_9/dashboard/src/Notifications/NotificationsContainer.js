import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchNotifications, setNotificationFilter } from '../actions';
import Notifications from './Notifications';

const NotificationsContainer = ({
  notifications,
  filter,
  fetchNotifications,
  setNotificationFilter,
}) => {
  useEffect(() => {
    fetchNotifications();
  }, [fetchNotifications]);

  return (
    <Notifications
      notifications={notifications}
      filter={filter}
      setNotificationFilter={setNotificationFilter}
    />
  );
};

const mapStateToProps = (state) => ({
  notifications: state.notifications,
  filter: state.filter,
});

const mapDispatchToProps = {
  fetchNotifications,
  setNotificationFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(NotificationsContainer);
