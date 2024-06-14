import uiReducer from './uiReducer';
import { Map } from 'immutable';
import {
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT
} from '../actions/uiActionTypes';

// Test suite for uiReducer
describe('uiReducer', () => {
  // Test initial state with no action
  it('should return the initial state with no action', () => {
    const expectedState = Map({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: Map()
    });
    expect(uiReducer(undefined, {})).toEqual(expectedState);
  });

  // Test initial state with unknown action (e.g., SELECT_COURSE)
  it('should return the initial state with unknown action', () => {
    const initialState = Map({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: Map()
    });
    const action = { type: 'SELECT_COURSE' };
    expect(uiReducer(initialState, action)).toEqual(initialState);
  });

  // Test state change for DISPLAY_NOTIFICATION_DRAWER action
  it('should handle DISPLAY_NOTIFICATION_DRAWER action', () => {
    const initialState = Map({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: Map()
    });
    const action = { type: DISPLAY_NOTIFICATION_DRAWER };
    const expectedState = initialState.set('isNotificationDrawerVisible', true);
    expect(uiReducer(initialState, action)).toEqual(expectedState);
  });

  // Additional tests for LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT can be added similarly
});
