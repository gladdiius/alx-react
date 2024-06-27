import React from 'react';
import { shallow } from 'enzyme';
import { App } from './App'; // Importing the unconnected component for testing

describe('App component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App isLoggedIn={true} displayNotificationDrawer={() => {}} hideNotificationDrawer={() => {}} />);
  });

  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('renders CourseList when user is logged in', () => {
    expect(wrapper.find('CourseList')).toHaveLength(1);
  });

  it('renders Login when user is not logged in', () => {
    wrapper.setProps({ isLoggedIn: false });
    expect(wrapper.find('Login')).toHaveLength(1);
  });

  it('passes displayDrawer prop to Notifications component correctly', () => {
    expect(wrapper.find('Notifications').prop('displayDrawer')).toEqual(false); // Adjust based on your actual prop structure
  });

  // Add other tests as needed for props and behavior

  // Test mapStateToProps function
  it('should map state to props correctly', () => {
    const initialState = {
      uiReducer: {
        isNotificationDrawerVisible: true // Example state using Immutable's Map
      }
    };

    const mappedProps = mapStateToProps(initialState);
    expect(mappedProps.isLoggedIn).toEqual(true);
    // Add more assertions for other props if needed
  });
});
