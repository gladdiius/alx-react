// courseSelector.js

import { createSelector } from 'reselect';

const coursesSelector = (state) => state.courses; // Assuming state.courses contains your course entities

export const getAllCourses = createSelector(
  coursesSelector,
  (courses) => courses.valueSeq().toList(), // Using valueSeq to get values as Sequence and toList to convert to List
);
