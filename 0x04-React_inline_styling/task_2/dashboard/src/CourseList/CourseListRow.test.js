// CourseListRow.test.js
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CourseListRow from './CourseListRow';

describe('CourseListRow Component', () => {
  test('renders without crashing', () => {
    render(<CourseListRow textFirstCell="Test" />);
  });

  test('renders default row with correct background color', () => {
    const { getByRole } = render(<CourseListRow textFirstCell="Test" />);
    const rowElement = getByRole('row');
    expect(rowElement).toHaveStyle('background-color: rgba(245, 245, 245, 0.67)');
  });

  test('renders header row with correct background color', () => {
    const { getByRole } = render(<CourseListRow isHeader={true} textFirstCell="Header" />);
    const rowElement = getByRole('row');
    expect(rowElement).toHaveStyle('background-color: rgba(222, 181, 181, 0.27)');
  });

  test('renders colSpan attribute for header row with one cell', () => {
    const { getByRole } = render(<CourseListRow isHeader={true} textFirstCell="Header" />);
    const thElement = getByRole('cell');
    expect(thElement).toHaveAttribute('colSpan', '2');
  });

  test('renders two th elements for header row with two cells', () => {
    const { getAllByRole } = render(<CourseListRow isHeader={true} textFirstCell="Header 1" textSecondCell="Header 2" />);
    const thElements = getAllByRole('cell');
    expect(thElements.length).toBe(2);
  });

  test('renders two td elements for default row with two cells', () => {
    const { getAllByRole } = render(<CourseListRow textFirstCell="Data 1" textSecondCell="Data 2" />);
    const tdElements = getAllByRole('cell');
    expect(tdElements.length).toBe(2);
  });
});
