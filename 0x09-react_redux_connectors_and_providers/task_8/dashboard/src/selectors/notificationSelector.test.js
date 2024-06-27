// notificationSelector.test.js

import { fromJS } from 'immutable';
import { getUnreadNotificationsByType } from './notificationSelector';

describe('getUnreadNotificationsByType Selector', () => {
  const state = fromJS({
    notifications: [
      { id: 1, type: 'default', value: 'Notification 1', read: false },
      { id: 2, type: 'urgent', value: 'Notification 2', read: false },
      { id: 3, type: 'urgent', value: 'Notification 3', read: true },
    ],
    filter: 'default',
  });

  it('should return unread notifications when filter is DEFAULT', () => {
    const result = getUnreadNotificationsByType(state);
    expect(result.size).toEqual(1); // Only one unread notification with filter 'default'
    expect(result.get(0).get('id')).toEqual(1);
  });

  it('should return unread urgent notifications when filter is URGENT', () => {
    const newState = state.set('filter', 'urgent');
    const result = getUnreadNotificationsByType(newState);
    expect(result.size).toEqual(1); // Only one unread urgent notification with filter 'urgent'
    expect(result.get(0).get('id')).toEqual(2);
  });

  it('should handle empty notifications array', () => {
    const emptyState = fromJS({ notifications: [], filter: 'default' });
    const result = getUnreadNotificationsByType(emptyState);
    expect(result.size).toEqual(0);
  });
});
