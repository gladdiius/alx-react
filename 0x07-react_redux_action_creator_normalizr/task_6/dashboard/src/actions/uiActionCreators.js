import { bindActionCreators } from 'redux';
import { login, logout, displayNotificationDrawer, hideNotificationDrawer } from './uiActionCreators';

export const boundLogin = (email, password) => dispatch => {
  return bindActionCreators(login, dispatch)(email, password);
};

export const boundLogout = () => dispatch => {
  return bindActionCreators(logout, dispatch)();
};

export const boundDisplayNotificationDrawer = () => dispatch => {
  return bindActionCreators(displayNotificationDrawer, dispatch)();
};

export const boundHideNotificationDrawer = () => dispatch => {
  return bindActionCreators(hideNotificationDrawer, dispatch)();
};
