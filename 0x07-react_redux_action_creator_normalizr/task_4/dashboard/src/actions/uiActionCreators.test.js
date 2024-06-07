// task_4/src/actions/uiActionCreators.test.js
import { login, logout, displayNotificationDrawer, hideNotificationDrawer } from './uiActionCreators';
import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from './uiActionTypes';

describe('uiActionCreators', () => {
  it('login should create an action to login a user', () => {
    const email = 'user@example.com';
    const password = 'password123';
    const expectedAction = {
      type: LOGIN,
      user: { email, password }
    };
    expect(login(email, password)).toEqual(expectedAction);
  });

  it('logout should create an action to logout a user', () => {
    const expectedAction = {
      type: LOGOUT
    };
    expect(logout()).to
