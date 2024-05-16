import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders Login component if not logged in', () => {
    const wrapper = shallow(<App isLoggedIn={false} />);
    expect(wrapper.find('Login').exists()).toBe(true);
  });

  it('renders CourseList component if logged in', () => {
    const wrapper = shallow(<App isLoggedIn={true} />);
    expect(wrapper.find('CourseList').exists()).toBe(true);
  });

  it('displays alert and calls logOut function when ctrl+h is pressed', () => {
    const logOutMock = jest.fn();
    const wrapper = shallow(<App isLoggedIn={true} logOut={logOutMock} />);
    
    // Simulate keydown event with ctrl+h
    wrapper.instance().handleKeyDown({ ctrlKey: true, key: 'h', preventDefault: jest.fn() });
    
    // Check if alert is displayed
    expect(global.alert).toHaveBeenCalledWith('Logging you out');
    
    // Check if logOut function is called
    expect(logOutMock).toHaveBeenCalled();
  });
});
