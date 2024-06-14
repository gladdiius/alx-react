// src/selectors/notificationSelector.js

import { createSelector } from 'reselect';

// Selector to get the filter type
export const filterTypeSelected = (state) => state.notifications.get('filter');

// Selector to get all notifications
export const getNotifications = (state) => state.notifications.get('notifications');

// Selector to get unread notifications
export const getUnreadNotifications = createSelector(
  getNotifications,
  (notifications) => notifications.filter(notification => !notification.isRead)
);
