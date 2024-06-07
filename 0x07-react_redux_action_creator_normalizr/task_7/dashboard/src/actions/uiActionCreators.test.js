// src/actions/uiActionCreators.test.js
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { loginSuccess, loginFailure, loginRequest } from './uiActionCreators';
import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE } from './uiActionTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('loginRequest', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('dispatches LOGIN and LOGIN_SUCCESS if API call is successful', () => {
    fetchMock.getOnce('/login-success.json', {
      body: { /* mock successful response */ },
      headers: { 'content-type': 'application/json' }
    });

    const expectedActions = [
      { type: LOGIN },
      { type: LOGIN_SUCCESS }
    ];

    const store = mockStore({});
    return store.dispatch(loginRequest('test@example.com', 'password'))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  it('dispatches LOGIN and LOGIN_FAILURE if API call fails', () => {
    fetchMock.getOnce('/login-success.json', 500); // Simulate API failure

    const expectedActions = [
      { type: LOGIN },
      { type: LOGIN_FAILURE }
    ];

    const store = mockStore({});
    return store.dispatch(loginRequest('test@example.com', 'password'))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});
