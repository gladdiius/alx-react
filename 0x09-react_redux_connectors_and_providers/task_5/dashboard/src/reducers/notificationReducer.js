import { Map, fromJS } from 'immutable';
import {
  SET_LOADING_STATE,
  FETCH_NOTIFICATIONS_SUCCESS
} from '../actions/notificationActionTypes';

const initialState = fromJS({
  notifications: [],
  loading: false
});

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING_STATE:
      return state.set('loading', action.isLoading);
    case FETCH_NOTIFICATIONS_SUCCESS:
      return state.mergeDeep({
        notifications: fromJS(action.notifications),
        loading: false
      });
    default:
      return state;
  }
};

export default notificationReducer;
