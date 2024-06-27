import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('<App />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App isLoggedIn={false} displayDrawer={false} />);
  });

  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('renders a login component when isLoggedIn is false', () => {
    expect(wrapper.find('Login').exists()).toBe(true);
    expect(wrapper.find('CourseList').exists()).toBe(false);
  });

  it('renders a course list component when isLoggedIn is true', () => {
    wrapper.setProps({ isLoggedIn: true });
    expect(wrapper.find('Login').exists()).toBe(false);
    expect(wrapper.find('CourseList').exists()).toBe(true);
  });

  it('renders Notifications component', () => {
    expect(wrapper.find('Notifications').exists()).toBe(true);
  });
});
