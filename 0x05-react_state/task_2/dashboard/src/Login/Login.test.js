import React from 'react';
import { shallow, mount } from 'enzyme';
import Login from './Login';
import AppContext from '../App/AppContext';

describe('Login component', () => {
  it('renders without crashing', () => {
    shallow(<Login />);
  });

  it('submit button is disabled by default', () => {
    const wrapper = mount(<Login />);
    expect(wrapper.find('input[type="submit"]').props().disabled).toBe(true);
  });

  it('submit button is enabled when email and password are not empty', () => {
    const wrapper = mount(<Login />);
    wrapper.find('input#email').simulate('change', { target: { value: 'test@example.com' } });
    wrapper.find('input#password').simulate('change', { target: { value: 'password' } });
    expect(wrapper.find('input[type="submit"]').props().disabled).toBe(false);
  });

  it('handleLoginSubmit is called when the form is submitted', () => {
    const logIn = jest.fn();
    const context = { logIn };
    const wrapper = mount(
      <AppContext.Provider value={context}>
        <Login />
      </AppContext.Provider>
    );
    wrapper.find('input#email').simulate('change', { target: { value: 'test@example.com' } });
    wrapper.find('input#password').simulate('change', { target: { value: 'password' } });
    wrapper.find('form').simulate('submit');
    expect(logIn).toHaveBeenCalledWith('test@example.com', 'password');
  });

  it('form submission does not reload the page', () => {
    const preventDefault = jest.fn();
    const wrapper = shallow(<Login />);
    wrapper.find('form').simulate('submit', { preventDefault });
    expect(preventDefault).toHaveBeenCalled();
  });
});
