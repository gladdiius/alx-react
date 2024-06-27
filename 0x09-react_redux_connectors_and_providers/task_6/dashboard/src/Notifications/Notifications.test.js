// Notifications.test.js

import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import { fetchNotifications, markNotificationAsRead } from '../actions/notificationActionCreators';
import { getUnreadNotifications } from '../selectors/notificationSelectors'; // Adjust path as per your setup

jest.mock('../selectors/notificationSelectors'); // Mocking selector

describe('Notifications Component', () => {
  let wrapper;
  const mockFetchNotifications = jest.fn();
  const mockMarkNotificationAsRead = jest.fn();
  const mockNotifications = {
    valueSeq: jest.fn().mockReturnValue([
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
    ]),
  };

  beforeEach(() => {
    getUnreadNotifications.mockImplementation(() => mockNotifications); // Mock selector implementation
    wrapper = shallow(
      <Notifications
        notifications={mockNotifications}
        fetchNotifications={mockFetchNotifications}
        markNotificationAsRead={mockMarkNotificationAsRead}
      />
    );
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call fetchNotifications on mount', () => {
    expect(mockFetchNotifications).toHaveBeenCalled();
  });

  it('should dispatch markNotificationAsRead action on notification click', () => {
    const notificationId = 1;
    wrapper.find('li').at(0).simulate('click');
    expect(mockMarkNotificationAsRead).toHaveBeenCalledWith(notificationId);
  });

  // Add more tests as needed
});
