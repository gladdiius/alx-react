import React from 'react';
import { shallow } from 'enzyme';
import App, { mapStateToProps } from './App';
import { fromJS } from 'immutable';

describe('App component tests', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });
});

describe('mapStateToProps', () => {
  it('should return the right object when passing state', () => {
    const state = fromJS({
      isUserLoggedIn: true,
    });

    const expected = { isLoggedIn: true };
    expect(mapStateToProps(state)).toEqual(expected);
  });
});
