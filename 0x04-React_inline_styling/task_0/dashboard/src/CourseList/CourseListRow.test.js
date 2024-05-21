import React from 'react';
import { render } from '@testing-library/react';
import CourseListRow from './CourseListRow';

test('renders a header row with one cell', () => {
    const { getByText } = render(<CourseListRow isHeader={true} textFirstCell="Header" />);
    const cell = getByText('Header');
    expect(cell).toBeInTheDocument();
    expect(cell).toHaveStyle('background-color: #deb5b545');
});

test('renders a header row with two cells', () => {
    const { getByText } = render(<CourseListRow isHeader={true} textFirstCell="Header 1" textSecondCell="Header 2" />);
    const cell1 = getByText('Header 1');
    const cell2 = getByText('Header 2');
    expect(cell1).toBeInTheDocument();
    expect(cell2).toBeInTheDocument();
    expect(cell1).toHaveStyle('background-color: #deb5b545');
    expect(cell2).toHaveStyle('background-color: #deb5b545');
});

test('renders a regular row with two cells', () => {
    const { getByText } = render(<CourseListRow textFirstCell="Cell 1" textSecondCell="Cell 2" />);
    const cell1 = getByText('Cell 1');
    const cell2 = getByText('Cell 2');
    expect(cell1).toBeInTheDocument();
    expect(cell2).toBeInTheDocument();
    expect(cell1).toHaveStyle('background-color: #f5f5f5ab');
    expect(cell2).toHaveStyle('background-color: #f5f5f5ab');
});
