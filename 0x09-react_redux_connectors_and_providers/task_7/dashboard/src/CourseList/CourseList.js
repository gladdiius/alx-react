// CourseList.js

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchCourses, selectCourse, unSelectCourse } from '../actions/courseActionCreators';
import CourseListRow from './CourseListRow';
import { getListCourses } from '../selectors/courseSelector';

const CourseList = ({ courses, fetchCourses, selectCourse, unSelectCourse }) => {
  useEffect(() => {
    fetchCourses();
  }, [fetchCourses]);

  const onChangeRow = (id, checked) => {
    if (checked) {
      selectCourse(id);
    } else {
      unSelectCourse(id);
    }
  };

  return (
    <div>
      <ul>
        {courses.map(course => (
          <CourseListRow
            key={course.get('id')}
            course={course}
            isChecked={course.get('isSelected')}
            onChangeRow={onChangeRow}
          />
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = state => ({
  courses: getListCourses(state),
});

const mapDispatchToProps = {
  fetchCourses,
  selectCourse,
  unSelectCourse,
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseList);
