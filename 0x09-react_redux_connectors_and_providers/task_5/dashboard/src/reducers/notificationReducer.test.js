// notificationReducer.test.js

import { fromJS } from 'immutable';
import notificationReducer from './notificationReducer';
import {
  setLoadingState,
  setNotifications,
} from '../actions/notificationActionCreators';

describe('notificationReducer', () => {
  it('should return the initial state', () => {
    const initialState = notificationReducer(undefined, {});
    expect(initialState.toJS()).toEqual({
      loading: false,
      notifications: [],
    });
  });

  it('should handle SET_LOADING_STATE', () => {
    let state = fromJS({
      loading: false,
      notifications: [],
    });
    state = notificationReducer(state, setLoadingState(true));
    expect(state.get('loading')).toEqual(true);
  });

  it('should handle FETCH_NOTIFICATIONS_SUCCESS', () => {
    let state = fromJS({
      loading: true,
      notifications: [],
    });
    const notificationsData = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
    ];
    state = notificationReducer(state, setNotifications(notificationsData));
    expect(state.get('loading')).toEqual(false);
    expect(state.get('notifications').size).toEqual(notificationsData.length);
  });

  // Add more tests as per your reducer functionality
});
