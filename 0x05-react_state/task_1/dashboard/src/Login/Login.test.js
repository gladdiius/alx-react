import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';

describe('<Login />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.exists()).toBe(true);
  });

  it('has the submit button disabled by default', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('input[type="submit"]').prop('disabled')).toBe(true);
  });

  it('enables the submit button when both inputs are not empty', () => {
    const wrapper = shallow(<Login />);
    wrapper.find('input#email').simulate('change', { target: { value: 'user@example.com' } });
    wrapper.find('input#password').simulate('change', { target: { value: 'password123' } });
    expect(wrapper.find('input[type="submit"]').prop('disabled')).toBe(false);
  });

  it('disables the submit button if one of the inputs is empty', () => {
    const wrapper = shallow(<Login />);
    wrapper.find('input#email').simulate('change', { target: { value: 'user@example.com' } });
    wrapper.find('input#password').simulate('change', { target: { value: '' } });
    expect(wrapper.find('input[type="submit"]').prop('disabled')).toBe(true);
  });

  it('calls handleLoginSubmit on form submission', () => {
    const wrapper = shallow(<Login />);
    const handleLoginSubmitSpy = jest.spyOn(wrapper.instance(), 'handleLoginSubmit');
    wrapper.instance().forceUpdate(); // necessary to apply the spy
    wrapper.find('form').simulate('submit', { preventDefault: () => {} });
    expect(handleLoginSubmitSpy).toHaveBeenCalled();
  });

  it('updates isLoggedIn state to true on form submission', () => {
    const wrapper = shallow(<Login />);
    wrapper.setState({ email: 'user@example.com', password: 'password123', enableSubmit: true });
    wrapper.find('form').simulate('submit', { preventDefault: () => {} });
    expect(wrapper.state('isLoggedIn')).toBe(true);
  });
});
