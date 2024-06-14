// schema/courses.js

import { schema } from 'normalizr';

export const courseSchema = new schema.Entity('courses');

export const coursesNormalizer = data => {
  return normalize(data, [courseSchema]);
};
