import React from 'react';
import { shallow } from 'enzyme';
import { NotificationsContainer } from './NotificationsContainer'; // Import the unconnected component for testing

describe('NotificationsContainer Component', () => {
  let wrapper;
  let fetchNotificationsMock = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<NotificationsContainer fetchNotifications={fetchNotificationsMock} />);
  });

  afterEach(() => {
    fetchNotificationsMock.mockClear();
  });

  it('should call fetchNotifications on mount', () => {
    expect(fetchNotificationsMock).toHaveBeenCalled();
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
