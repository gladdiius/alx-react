// actions/courseActionCreators.js

import { SET_COURSES } from './actionTypes';

export const fetchCourses = () => (dispatch) => {
  fetch('/dist/courses.json') // Adjust the path as per your project structure
    .then((response) => response.json())
    .then((data) => {
      dispatch(setCourses(data)); // Dispatch setCourses action with the fetched data
    })
    .catch((error) => {
      console.error('Error fetching courses:', error);
      // Handle error if needed
    });
};

export const setCourses = (courses) => ({
  type: SET_COURSES,
  courses,
});
