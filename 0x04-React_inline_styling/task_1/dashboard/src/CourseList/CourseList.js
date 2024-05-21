import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import CourseListRow from './CourseListRow';

function CourseList() {
  return (
    <div className={css(styles.courseListDev)}>
      <table id='CourseList' className={css(styles.courseList)}>
        <thead>
          <CourseListRow textFirstCell="Available courses" isHeader={true} />
          <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />
        </thead>
        <tbody>
          <CourseListRow textFirstCell="ES6" textSecondCell="60" isHeader={false} />
          <CourseListRow textFirstCell="Webpack" textSecondCell="20" isHeader={false} />
          <CourseListRow textFirstCell="React" textSecondCell="40" isHeader={false} />
        </tbody>
      </table>
    </div>
  );
}

const styles = StyleSheet.create({
  courseListDev: {
    height: '70vh',
  },
  courseList: {
    width: '100%',
    border: '1px solid black',
    borderCollapse: 'collapse',
    margin: '20px 0',
  },
  th: {
    border: '1px solid black',
    textAlign: 'left',
    padding: '8px',
  },
  td: {
    border: '1px solid black',
    textAlign: 'left',
    padding: '8px',
  },
});

export default CourseList;
