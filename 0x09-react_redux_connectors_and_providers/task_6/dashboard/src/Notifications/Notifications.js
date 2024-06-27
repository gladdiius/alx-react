// Notifications.js

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNotifications, setLoadingState, setNotifications, markNotificationAsRead } from '../actions/notificationActionCreators';
import { getUnreadNotifications } from '../selectors/notificationSelectors'; // Adjust path as per your setup

class Notifications extends Component {
  componentDidMount() {
    const { fetchNotifications } = this.props;
    fetchNotifications();
  }

  render() {
    const { notifications, markNotificationAsRead } = this.props;

    return (
      <div>
        <h2>Notifications</h2>
        <ul>
          {notifications.valueSeq().map((notification) => (
            <li key={notification.get('id')} onClick={() => markNotificationAsRead(notification.get('id'))}>
              {notification.get('value')}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  notifications: getUnreadNotifications(state), // Using selector to filter unread notifications
});

const mapDispatchToProps = {
  fetchNotifications,
  markNotificationAsRead,
};

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);
