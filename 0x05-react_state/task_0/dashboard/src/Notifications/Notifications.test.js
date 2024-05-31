import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('<Notifications />', () => {
  let handleDisplayDrawer;
  let handleHideDrawer;

  beforeEach(() => {
    handleDisplayDrawer = jest.fn();
    handleHideDrawer = jest.fn();
  });

  it('renders without crashing', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders the menu item when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    expect(wrapper.find('.menuItem').length).toBe(1);
    expect(wrapper.find('.Notifications').length).toBe(0);
  });

  it('renders the notifications div when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('.menuItem').length).toBe(1);
    expect(wrapper.find('.Notifications').length).toBe(1);
  });

  it('calls handleDisplayDrawer when the menu item is clicked', () => {
    const wrapper = shallow(<Notifications displayDrawer={false} handleDisplayDrawer={handleDisplayDrawer} />);
    wrapper.find('.menuItem').simulate('click');
    expect(handleDisplayDrawer).toHaveBeenCalled();
  });

  it('calls handleHideDrawer when the close button is clicked', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} handleHideDrawer={handleHideDrawer} />);
    wrapper.find('button').simulate('click');
    expect(handleHideDrawer).toHaveBeenCalled();
  });

  it('renders three NotificationItem components', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find(NotificationItem).length).toBe(3);
  });

  it('renders the correct text for the menu item', () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    expect(wrapper.find('.menuItem p').text()).toBe('Your notifications');
  });

  it('renders the correct text for the notifications header', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('.Notifications p').first().text()).toBe('Here is the list of notifications');
  });
});
