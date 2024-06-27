// courseActionCreators.test.js

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { fetchCourses, setCourses } from './courseActionCreators';
import { SET_COURSES } from './actionTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('fetchCourses action creator', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('dispatches SET_COURSES action when fetching courses has been done', () => {
    const mockCourses = [
      { id: 1, title: 'Course 1' },
      { id: 2, title: 'Course 2' },
    ];
    fetchMock.getOnce('/dist/courses.json', {
      body: mockCourses,
      headers: { 'content-type': 'application/json' },
    });

    const expectedActions = [{ type: SET_COURSES, courses: mockCourses }];
    const store = mockStore({ courses: [] });

    return store.dispatch(fetchCourses()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  // Add more tests to handle errors, edge cases, etc.
});
