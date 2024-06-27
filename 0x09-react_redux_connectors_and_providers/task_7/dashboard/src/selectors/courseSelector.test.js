// courseSelector.test.js

import { Map } from 'immutable';
import { getAllCourses } from './courseSelector';

describe('getAllCourses selector', () => {
  it('should return all courses as a List', () => {
    const state = {
      courses: Map({
        1: { id: 1, title: 'Course 1' },
        2: { id: 2, title: 'Course 2' },
        3: { id: 3, title: 'Course 3' },
      }),
    };

    const result = getAllCourses(state);
    expect(result.size).toEqual(3); // Ensure correct number of courses
    expect(result.get(0).title).toEqual('Course 1'); // Check if the first course title is correct
    // Add more specific checks as needed for your application's course structure
  });

  // Add more tests to cover edge cases, empty state, etc.
});
