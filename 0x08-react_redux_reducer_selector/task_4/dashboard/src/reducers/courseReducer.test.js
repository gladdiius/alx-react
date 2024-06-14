// reducers/courseReducer.test.js

import { fromJS } from 'immutable';
import courseReducer from './courseReducer';
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';

describe('courseReducer', () => {
  it('should return the initial state', () => {
    expect(courseReducer(undefined, {})).toEqual(fromJS({
      coursesById: {}
    }));
  });

  it('should handle FETCH_COURSE_SUCCESS action', () => {
    const action = {
      type: FETCH_COURSE_SUCCESS,
      data: [
        { id: 1, name: 'ES6', credit: 60 },
        { id: 2, name: 'Webpack', credit: 20 }
      ]
    };
    const expectedState = fromJS({
      coursesById: {
        1: { id: 1, name: 'ES6', credit: 60, isSelected: false },
        2: { id: 2, name: 'Webpack', credit: 20, isSelected: false }
      }
    });
    expect(courseReducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle SELECT_COURSE action', () => {
    const initialState = fromJS({
      coursesById: {
        1: { id: 1, name: 'ES6', credit: 60, isSelected: false }
      }
    });
    const action = { type: SELECT_COURSE, index: 1 };
    const expectedState = fromJS({
      coursesById: {
        1: { id: 1, name: 'ES6', credit: 60, isSelected: true }
      }
    });
    expect(courseReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle UNSELECT_COURSE action', () => {
    const initialState = fromJS({
      coursesById: {
        1: { id: 1, name: 'ES6', credit: 60, isSelected: true }
      }
    });
    const action = { type: UNSELECT_COURSE, index: 1 };
    const expectedState = fromJS({
      coursesById: {
        1: { id: 1, name: 'ES6', credit: 60, isSelected: false }
      }
    });
    expect(courseReducer(initialState, action)).toEqual(expectedState);
  });
});
