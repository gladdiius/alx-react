// CourseList.test.js

import React from 'react';
import { shallow } from 'enzyme';
import { CourseList } from './CourseList'; // Import the unconnected component for testing
import CourseListRow from './CourseListRow';

describe('CourseList Component', () => {
  let wrapper;
  const mockCourses = [
    { id: '1', name: 'Course 1' },
    { id: '2', name: 'Course 2' },
  ];
  const mockFetchCourses = jest.fn();
  const mockSelectCourse = jest.fn();
  const mockUnSelectCourse = jest.fn();

  beforeEach(() => {
    wrapper = shallow(
      <CourseList
        courses={mockCourses}
        fetchCourses={mockFetchCourses}
        selectCourse={mockSelectCourse}
        unSelectCourse={mockUnSelectCourse}
      />
    );
  });

  it('calls fetchCourses action creator on mount', () => {
    expect(mockFetchCourses).toHaveBeenCalledTimes(1);
  });

  it('renders CourseListRow components based on courses prop', () => {
    expect(wrapper.find(CourseListRow)).toHaveLength(mockCourses.length);
  });

  it('calls selectCourse action creator when onChangeRow is called with checked=true', () => {
    const instance = wrapper.instance();
    instance.onChangeRow('1', true);
    expect(mockSelectCourse).toHaveBeenCalledWith('1');
  });

  it('calls unSelectCourse action creator when onChangeRow is called with checked=false', () => {
    const instance = wrapper.instance();
    instance.onChangeRow('2', false);
    expect(mockUnSelectCourse).toHaveBeenCalledWith('2');
  });
});
