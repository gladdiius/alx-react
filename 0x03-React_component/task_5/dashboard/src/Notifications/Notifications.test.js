import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('Notifications component', () => {
  it('does not rerender when updating props with the same list', () => {
    const listNotifications = [
      { id: 1, type: 'default', html: { __html: '<u>Test Notification 1</u>' }, value: 'Test Notification 1' },
      { id: 2, type: 'urgent', html: { __html: '<u>Test Notification 2</u>' }, value: 'Test Notification 2' },
    ];
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    const renderSpy = jest.spyOn(wrapper.instance(), 'render');

    // Update props with the same list
    wrapper.setProps({ displayDrawer: true, listNotifications });

    // Expect render to not have been called
    expect(renderSpy).not.toHaveBeenCalled();
  });

  it('rerenders when updating props with a longer list', () => {
    const initialList = [
      { id: 1, type: 'default', html: { __html: '<u>Test Notification 1</u>' }, value: 'Test Notification 1' }
    ];
    const newList = [
      { id: 1, type: 'default', html: { __html: '<u>Test Notification 1</u>' }, value: 'Test Notification 1' },
      { id: 2, type: 'urgent', html: { __html: '<u>Test Notification 2</u>' }, value: 'Test Notification 2' }
    ];
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={initialList} />);
    const renderSpy = jest.spyOn(wrapper.instance(), 'render');

    // Update props with a longer list
    wrapper.setProps({ displayDrawer: true, listNotifications: newList });

    // Expect render to have been called
    expect(renderSpy).toHaveBeenCalled();
  });
});
