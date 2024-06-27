// Notifications.test.js

import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import { fetchNotifications, setLoadingState, setNotifications } from '../actions/notificationActionCreators';

describe('Notifications Component', () => {
  let wrapper;
  const mockFetchNotifications = jest.fn();
  const mockListNotifications = [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'New resume available' },
  ];

  beforeEach(() => {
    wrapper = shallow(
      <Notifications
        listNotifications={mockListNotifications}
        fetchNotifications={mockFetchNotifications}
      />
    );
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call fetchNotifications on mount', () => {
    expect(mockFetchNotifications).toHaveBeenCalled();
  });

  it('should dispatch setLoadingState action', () => {
    const loading = true;
    const action = setLoadingState(loading);
    expect(action).toEqual({ type: 'SET_LOADING_STATE', payload: loading });
  });

  it('should dispatch setNotifications action', () => {
    const notifications = [{ id: 1, type: 'default', value: 'Test Notification' }];
    const action = setNotifications(notifications);
    expect(action).toEqual({ type: 'FETCH_NOTIFICATIONS_SUCCESS', payload: notifications });
  });

  // Add tests for SET_LOADING_STATE, integration tests, etc.
});
