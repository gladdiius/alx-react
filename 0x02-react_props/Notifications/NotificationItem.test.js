import React from 'react';
import { shallow } from 'enzyme'; // Import shallow function from enzyme
import NotificationItem from './NotificationItem'; // Import the NotificationItem component

describe('NotificationItem component', () => {
  it('renders without crashing', () => {
    // Shallow render the NotificationItem component
    const wrapper = shallow(<NotificationItem />);
    // Expect the wrapper to exist
    expect(wrapper.exists()).toBe(true);
  });

  it('renders correct html with dummy type and value props', () => {
    // Dummy type and value props
    const type = 'default';
    const value = 'test';
    // Shallow render the NotificationItem component with dummy props
    const wrapper = shallow(<NotificationItem type={type} value={value} />);
    // Expect the wrapper to contain the correct html structure
    expect(wrapper.html()).toBe(`<li data-notification-type="${type}">${value}</li>`);
  });

  it('renders correct html with dummy html prop', () => {
    // Dummy html prop
    const html = { __html: '<u>test</u>' };
    // Shallow render the NotificationItem component with dummy prop
    const wrapper = shallow(<NotificationItem html={html} />);
    // Expect the wrapper to contain the correct html structure
    expect(wrapper.html()).toBe('<li><u>test</u></li>');
  });
});
