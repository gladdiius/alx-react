import React from 'react';
import { shallow } from 'enzyme';
import { fromJS } from 'immutable';
import { App } from './App'; // Import the unconnected App component

describe('App component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });

  it('correctly maps state to props', () => {
    const state = fromJS({
      ui: {
        isUserLoggedIn: true,
        isNotificationDrawerVisible: true,
      },
    });
    const expectedProps = {
      isLoggedIn: true,
      displayDrawer: true,
    };
    const mapStateToProps = (state) => ({
      isLoggedIn: state.getIn(['ui', 'isUserLoggedIn']),
      displayDrawer: state.getIn(['ui', 'isNotificationDrawerVisible']),
    });
    expect(mapStateToProps(state.toJS())).toEqual(expectedProps);
  });
});
