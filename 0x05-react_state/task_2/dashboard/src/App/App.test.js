import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';
import Header from '../Header/Header';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import AppContext from './AppContext';

describe('App component', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('contains the Header component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Header).length).toBe(1);
  });

  it('contains the Login component when the user is not logged in', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Login).length).toBe(1);
  });

  it('does not contain the CourseList component when the user is not logged in', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(CourseList).length).toBe(0);
  });

  it('contains the CourseList component when the user is logged in', () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user: { isLoggedIn: true } }}>
        <App />
      </AppContext.Provider>
    );
    expect(wrapper.find(CourseList).length).toBe(1);
  });

  it('logIn function updates the state and logs in the user', () => {
    const wrapper = mount(<App />);
    const instance = wrapper.instance();
    instance.logIn('test@example.com', 'password');
    expect(wrapper.state().user.isLoggedIn).toBe(true);
    expect(wrapper.state().user.email).toBe('test@example.com');
  });

  it('logOut function updates the state and logs out the user', () => {
    const wrapper = mount(<App />);
    wrapper.setState({ user: { isLoggedIn: true, email: 'test@example.com', password: 'password' } });
    const instance = wrapper.instance();
    instance.logOut();
    expect(wrapper.state().user.isLoggedIn).toBe(false);
    expect(wrapper.state().user.email).toBe('');
  });
});
