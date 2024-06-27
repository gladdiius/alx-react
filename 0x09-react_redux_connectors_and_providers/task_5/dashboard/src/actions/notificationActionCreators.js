import {
    SET_LOADING_STATE,
    FETCH_NOTIFICATIONS_SUCCESS
  } from './notificationActionTypes';
  import { fromJS } from 'immutable';
  
  // Action creators
  export const setLoadingState = (isLoading) => ({
    type: SET_LOADING_STATE,
    isLoading
  });
  
  export const setNotifications = (notifications) => ({
    type: FETCH_NOTIFICATIONS_SUCCESS,
    notifications: fromJS(notifications)
  });
  
  export const fetchNotifications = () => {
    return (dispatch) => {
      dispatch(setLoadingState(true));
      fetch('/notifications.json')
        .then((response) => response.json())
        .then((data) => {
          dispatch(setNotifications(data));
          dispatch(setLoadingState(false));
        })
        .catch((error) => {
          console.error('Error fetching notifications:', error);
          dispatch(setLoadingState(false));
        });
    };
  };
  