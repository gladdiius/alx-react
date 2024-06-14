// task_4/src/reducers/notificationReducer.test.js

import notificationReducer from './notificationReducer';
import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER
} from '../actions/notificationActionTypes';

// Test suite for notificationReducer
describe('notificationReducer', () => {
  // Test default state returns initial state
  it('should return the initial state with no action', () => {
    expect(notificationReducer(undefined, {})).toEqual({
      notifications: [],
      filter: "DEFAULT"
    });
  });

  // Test FETCH_NOTIFICATIONS_SUCCESS action
  it('should handle FETCH_NOTIFICATIONS_SUCCESS action', () => {
    const action = {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      data: [
        { id: 1, type: "default", value: "New course available" },
        { id: 2, type: "urgent", value: "New resume available" },
        { id: 3, type: "urgent", value: "New data available" }
      ]
    };
    const expectedState = {
      notifications: [
        { id: 1, isRead: false, type: "default", value: "New course available" },
        { id: 2, isRead: false, type: "urgent", value: "New resume available" },
        { id: 3, isRead: false, type: "urgent", value: "New data available" }
      ],
      filter: "DEFAULT"
    };
    expect(notificationReducer(undefined, action)).toEqual(expectedState);
  });

  // Test MARK_AS_READ action
  it('should handle MARK_AS_READ action', () => {
    const initialState = {
      notifications: [
        { id: 1, isRead: false, type: "default", value: "New course available" },
        { id: 2, isRead: false, type: "urgent", value: "New resume available" },
        { id: 3, isRead: false, type: "urgent", value: "New data available" }
      ],
      filter: "DEFAULT"
    };
    const action = { type: MARK_AS_READ, index: 2 };
    const expectedState = {
      notifications: [
        { id: 1, isRead: false, type: "default", value: "New course available" },
        { id: 2, isRead: true, type: "urgent", value: "New resume available" },
        { id: 3, isRead: false, type: "urgent", value: "New data available" }
      ],
      filter: "DEFAULT"
    };
    expect(notificationReducer(initialState, action)).toEqual(expectedState);
  });

  // Test SET_TYPE_FILTER action
  it('should handle SET_TYPE_FILTER action', () => {
    const initialState = {
      notifications: [
        { id: 1, isRead: false, type: "default", value: "New course available" },
        { id: 2, isRead: false, type: "urgent", value: "New resume available" },
        { id: 3, isRead: false, type: "urgent", value: "New data available" }
      ],
      filter: "DEFAULT"
    };
    const action = { type: SET_TYPE_FILTER, filter: "URGENT" };
    const expectedState = {
      notifications: [
        { id: 1, isRead: false, type: "default", value: "New course available" },
        { id: 2, isRead: false, type: "urgent", value: "New resume available" },
        { id: 3, isRead: false, type: "urgent", value: "New data available" }
      ],
      filter: "URGENT"
    };
    expect(notificationReducer(initialState, action)).toEqual(expectedState);
  });

});
