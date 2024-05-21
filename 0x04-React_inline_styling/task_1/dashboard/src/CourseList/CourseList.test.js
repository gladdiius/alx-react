// CourseList.test.js
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CourseList from './CourseList';

// Mock CourseListRow component
jest.mock('./CourseListRow', () => ({ textFirstCell, textSecondCell, isHeader }) => (
  <tr>
    <td>{textFirstCell}</td>
    {textSecondCell && <td>{textSecondCell}</td>}
  </tr>
));

describe('CourseList Component', () => {
  test('renders without crashing', () => {
    const { getByText } = render(<CourseList />);
    expect(getByText('Available courses')).toBeInTheDocument();
    expect(getByText('Course name')).toBeInTheDocument();
    expect(getByText('ES6')).toBeInTheDocument();
    expect(getByText('Webpack')).toBeInTheDocument();
    expect(getByText('React')).toBeInTheDocument();
  });

  test('renders table with correct attributes', () => {
    const { getByTestId } = render(<CourseList />);
    const tableElement = getByTestId('course-list-table');
    expect(tableElement).toBeInTheDocument();
    expect(tableElement).toHaveAttribute('id', 'CourseList');
  });

  test('renders correct number of rows', () => {
    const { getAllByRole } = render(<CourseList />);
    const rows = getAllByRole('row');
    // Header row + 3 data rows
    expect(rows.length).toBe(4);
  });
});
