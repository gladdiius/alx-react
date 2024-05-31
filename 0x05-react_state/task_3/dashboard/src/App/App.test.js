import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';
import AppContext from './AppContext';

describe('App component', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('initializes state with correct values', () => {
    const wrapper = shallow(<App />);
    const initialState = wrapper.state();
    expect(initialState.user.isLoggedIn).toBe(false);
    expect(initialState.listNotifications).toHaveLength(3);
  });

  it('updates state when logging in', () => {
    const wrapper = mount(<App />);
    const instance = wrapper.instance();
    instance.logIn('test@example.com', 'password');
    expect(wrapper.state().user.isLoggedIn).toBe(true);
    expect(wrapper.state().user.email).toBe('test@example.com');
    expect(wrapper.state().user.password).toBe('password');
  });

  it('updates state when logging out', () => {
    const wrapper = mount(<App />);
    const instance = wrapper.instance();
    instance.setState({
      user: {
        isLoggedIn: true,
        email: 'test@example.com',
        password: 'password',
      },
    });
    instance.logOut();
    expect(wrapper.state().user.isLoggedIn).toBe(false);
    expect(wrapper.state().user.email).toBe('');
    expect(wrapper.state().user.password).toBe('');
  });

  it('updates state when marking notification as read', () => {
    const wrapper = mount(<App />);
    const instance = wrapper.instance();
    instance.setState({
      listNotifications: [
        { id: 1, type: 'default', value: 'New course available' },
        { id: 2, type: 'urgent', value: 'New resume available' },
        { id: 3, type: 'urgent', html: { __html: '<b>Urgent requirement</b> - complete by EOD' } }
      ]
    });
    instance.markNotificationAsRead(2);
    const updatedNotifications = wrapper.state().listNotifications;
    expect(updatedNotifications).toHaveLength(2);
    expect(updatedNotifications.find(notification => notification.id === 2)).toBeUndefined();
  });

  it('passes context values to children components', () => {
    const wrapper = mount(<App />);
    const notificationsComponent = wrapper.find('Notifications');
    expect(notificationsComponent.prop('listNotifications')).toBeDefined();
    expect(notificationsComponent.prop('markNotificationAsRead')).toBeDefined();
  });
});
