// src/actions/uiActionCreators.js
import { LOGIN_SUCCESS, LOGIN_FAILURE } from './uiActionTypes';

export const loginSuccess = () => ({
  type: LOGIN_SUCCESS
});

export const loginFailure = () => ({
  type: LOGIN_FAILURE
});

export const loginRequest = (email, password) => dispatch => {
  dispatch(login()); // Dispatch login action
  
  fetch('/login-success.json') // Fetch API
    .then(response => {
      if (response.ok) {
        dispatch(loginSuccess()); // Dispatch login success action if API call is successful
      } else {
        dispatch(loginFailure()); // Dispatch login failure action if API call fails
      }
    })
    .catch(error => {
      dispatch(loginFailure()); // Dispatch login failure action if there's an error
    });
};
