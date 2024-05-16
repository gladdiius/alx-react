import React from 'react';
import { mount } from 'enzyme';
import WithLogging from './WithLogging';

describe('WithLogging higher-order component', () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {}); // Mock console.log
  });

  afterEach(() => {
    consoleSpy.mockRestore(); // Restore console.log
  });

  it('logs mount and unmount events with "Component" for pure HTML', () => {
    const WrappedComponent = WithLogging(() => <p>Hello, world!</p>);
    const wrapper = mount(<WrappedComponent />);
    expect(consoleSpy).toHaveBeenCalledWith('Component is mounted on componentDidMount()');

    wrapper.unmount();
    expect(consoleSpy).toHaveBeenCalledWith('Component is going to unmount on componentWillUnmount()');
  });

  it('logs mount and unmount events with the component name for Login component', () => {
    const Login = () => <p>Login component</p>;
    Login.displayName = 'Login'; // Mocking displayName for Login component
    const WrappedComponent = WithLogging(Login);
    const wrapper = mount(<WrappedComponent />);
    expect(consoleSpy).toHaveBeenCalledWith('Component Login is mounted on componentDidMount()');

    wrapper.unmount();
    expect(consoleSpy).toHaveBeenCalledWith('Component Login is going to unmount on componentWillUnmount()');
  });
});
