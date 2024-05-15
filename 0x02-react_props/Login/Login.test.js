import React from 'react';
import { shallow } from 'enzyme';
import LoginForm from './LoginForm';

describe('LoginForm component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<LoginForm />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders login form elements', () => {
    const handleLabelClick = jest.fn();
    const wrapper = shallow(<LoginForm handleLabelClick={handleLabelClick} />);
    expect(wrapper.find('p').text()).toEqual('Login to access the full dashboard');
    expect(wrapper.find('label[htmlFor="email"]').text()).toEqual('Email:');
    expect(wrapper.find('label[htmlFor="password"]').text()).toEqual('Password:');
    expect(wrapper.find('input#email')).toHaveLength(1);
    expect(wrapper.find('input#password')).toHaveLength(1);
  });

  it('calls handleLabelClick function when label is clicked', () => {
    const handleLabelClick = jest.fn();
    const wrapper = shallow(<LoginForm handleLabelClick={handleLabelClick} />);
    wrapper.find('label[htmlFor="email"]').simulate('click');
    expect(handleLabelClick).toHaveBeenCalledWith('email');
    wrapper.find('label[htmlFor="password"]').simulate('click');
    expect(handleLabelClick).toHaveBeenCalledWith('password');
  });
});
