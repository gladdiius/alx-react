import { fromJS } from 'immutable';
import uiReducer from './uiReducer';
import { LOGIN, LOGOUT } from '../actions/uiActionTypes';

describe('uiReducer', () => {
  it('should handle LOGIN action', () => {
    const initialState = fromJS({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: null,
    });
    const user = { email: 'test@example.com' };
    const action = { type: LOGIN, user };
    const expectedState = fromJS({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: true,
      user: user,
    });

    const newState = uiReducer(initialState, action);
    expect(newState).toEqual(expectedState);
  });

  it('should handle LOGOUT action', () => {
    const initialState = fromJS({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: true,
      user: { email: 'test@example.com' },
    });
    const action = { type: LOGOUT };
    const expectedState = fromJS({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: null,
    });

    const newState = uiReducer(initialState, action);
    expect(newState).toEqual(expectedState);
  });
});
