import React from 'react';
import PropTypes from 'prop-types';
import CourseListRow from './CourseListRow';
import CourseShape from './CourseShape'; // Assuming CourseShape is defined as a PropTypes.shape

function CourseList({ listCourses }) {
    return (
        <div className='couselistdev'>
            <table id='CourseList'>
                <thead>
                    <CourseListRow textFirstCell="Available courses" isHeader={true} />
                    <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />
                </thead>
                <tbody>
                    {listCourses.length === 0 ? (
                        <tr>
                            <td colSpan="2">No course available yet</td>
                        </tr>
                    ) : (
                        listCourses.map(course => (
                            <CourseListRow
                                key={course.id}
                                textFirstCell={course.name}
                                textSecondCell={course.credit.toString()}
                                isHeader={false}
                            />
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
}

CourseList.propTypes = {
    listCourses: PropTypes.arrayOf(CourseShape), // Use CourseShape for listCourses prop
};

CourseList.defaultProps = {
    listCourses: [],
};

export default CourseList;
