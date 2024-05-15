import React from 'react';
import { shallow } from 'enzyme'; // Import shallow function from enzyme
import App from './App'; // Import the App component
import Notifications from './Notifications'; // Import the Notifications component
import Header from './Header'; // Import the Header component
import Footer from './Footer'; // Import the Footer component
import Login from './Login'; // Import the Login component

describe('App component', () => {
  it('renders without crashing', () => {
    // Shallow render the App component
    const wrapper = shallow(<App />);
    // Expect the wrapper to exist
    expect(wrapper.exists()).toBe(true);
  });

  it('renders child components', () => {
    // Shallow render the App component
    const wrapper = shallow(<App />);
    // Expect the wrapper to contain the Notifications component
    expect(wrapper.find(Notifications)).toHaveLength(1);
    // Expect the wrapper to contain the Header component
    expect(wrapper.find(Header)).toHaveLength(1);
    // Expect the wrapper to contain the Login component
    expect(wrapper.find(Login)).toHaveLength(1);
    // Expect the wrapper to contain the Footer component
    expect(wrapper.find(Footer)).toHaveLength(1);
  });
});
