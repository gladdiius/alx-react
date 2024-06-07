import { bindActionCreators } from 'redux';
import { markAsRead, setNotificationFilter } from './notificationActionCreators';

export const boundMarkAsRead = (index) => dispatch => {
  return bindActionCreators(markAsRead, dispatch)(index);
};

export const boundSetNotificationFilter = (filter) => dispatch => {
  return bindActionCreators(setNotificationFilter, dispatch)(filter);
};
