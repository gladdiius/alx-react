// notificationSelector.js

import { createSelector } from 'reselect';

const getNotifications = state => state.notifications.get('notifications');
const getFilter = state => state.notifications.get('filter');

export const getUnreadNotificationsByType = createSelector(
  [getNotifications, getFilter],
  (notifications, filter) => {
    const unreadNotifications = notifications.filter(notification => !notification.get('isRead'));

    if (filter === 'urgent') {
      return unreadNotifications.filter(notification => notification.get('type') === 'urgent');
    }

    // Default filter (including 'default' and other unspecified filters)
    return unreadNotifications;
  }
);
