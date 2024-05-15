import React from 'react';
import { render } from '@testing-library/react';
import CourseList from './CourseList';

describe('CourseList Component', () => {
    test('renders without crashing', () => {
        render(<CourseList />);
    });

    test('renders five different rows', () => {
        const { getAllByRole } = render(<CourseList />);
        const rows = getAllByRole('row');
        expect(rows.length).toBe(5);
        rows.forEach(row => {
            expect(row).toBeInTheDocument();
        });
    });
});
