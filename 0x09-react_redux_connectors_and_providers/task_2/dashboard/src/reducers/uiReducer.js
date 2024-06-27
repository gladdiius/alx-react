import { fromJS } from 'immutable';
import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from '../actions/uiActionTypes';

const initialState = fromJS({
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: null,
});

function uiReducer(state = initialState, action) {
  switch (action.type) {
    case DISPLAY_NOTIFICATION_DRAWER:
      return state.set('isNotificationDrawerVisible', true);
    case HIDE_NOTIFICATION_DRAWER:
      return state.set('isNotificationDrawerVisible', false);
    case LOGIN:
      return state
        .set('isUserLoggedIn', true)
        .set('user', fromJS(action.user));
    case LOGOUT:
      return state
        .set('isUserLoggedIn', false)
        .set('user', null);
    default:
      return state;
  }
}

export default uiReducer;
