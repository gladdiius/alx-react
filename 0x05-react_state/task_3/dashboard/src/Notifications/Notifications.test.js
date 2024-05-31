import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('Notifications component', () => {
  const mockNotifications = [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'New resume available' },
    { id: 3, type: 'urgent', html: { __html: '<b>Urgent requirement</b> - complete by EOD' } }
  ];
  const mockMarkNotificationAsRead = jest.fn();

  it('renders without crashing', () => {
    shallow(<Notifications listNotifications={[]} markNotificationAsRead={() => {}} />);
  });

  it('renders correct number of notifications', () => {
    const wrapper = shallow(<Notifications listNotifications={mockNotifications} markNotificationAsRead={() => {}} />);
    expect(wrapper.find('NotificationItem')).toHaveLength(mockNotifications.length);
  });

  it('calls markNotificationAsRead function when a notification is clicked', () => {
    const wrapper = shallow(<Notifications listNotifications={mockNotifications} markNotificationAsRead={mockMarkNotificationAsRead} />);
    wrapper.find('NotificationItem').at(0).simulate('click');
    expect(mockMarkNotificationAsRead).toHaveBeenCalledWith(mockNotifications[0].id);
  });
});
