import React from 'react';
import { shallow, mount } from 'enzyme';
import Header from './Header';
import AppContext from '../App/AppContext';

describe('Header component', () => {
  it('renders without crashing', () => {
    shallow(<Header />);
  });

  it('does not display the logout section when user is not logged in', () => {
    const context = { user: { isLoggedIn: false } };
    const wrapper = mount(
      <AppContext.Provider value={context}>
        <Header />
      </AppContext.Provider>
    );
    expect(wrapper.find('#logoutSection').length).toBe(0);
  });

  it('displays the logout section with user email when user is logged in', () => {
    const context = { user: { isLoggedIn: true, email: 'test@example.com' }, logOut: jest.fn() };
    const wrapper = mount(
      <AppContext.Provider value={context}>
        <Header />
      </AppContext.Provider>
    );
    const logoutSection = wrapper.find('#logoutSection');
    expect(logoutSection.length).toBe(1);
    expect(logoutSection.text()).toContain('Welcome test@example.com (logout)');
  });

  it('calls logOut function when clicking on logout link', () => {
    const logOut = jest.fn();
    const context = { user: { isLoggedIn: true, email: 'test@example.com' }, logOut };
    const wrapper = mount(
      <AppContext.Provider value={context}>
        <Header />
      </AppContext.Provider>
    );
    wrapper.find('#logoutSection a').simulate('click');
    expect(logOut).toHaveBeenCalled();
  });
});
