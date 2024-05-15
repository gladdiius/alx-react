// CourseList/CourseListRow.test.js

import React from 'react';
import { render } from '@testing-library/react';
import CourseListRow from './CourseListRow';

describe('CourseListRow Component', () => {
    describe('When isHeader is true', () => {
        test('renders one cell with colspan = 2 when textSecondCell does not exist', () => {
            const { getByText } = render(<CourseListRow isHeader={true} textFirstCell="Header 1" />);
            const headerCell = getByText('Header 1');
            expect(headerCell.tagName).toBe('TH');
            expect(headerCell.colSpan).toBe(2);
        });

        test('renders two cells when textSecondCell is present', () => {
            const { getByText } = render(
                <CourseListRow isHeader={true} textFirstCell="Header 2" textSecondCell="Header 2" />
            );
            const headerCell1 = getByText('Header 2');
            const headerCell2 = getByText('Header 2');
            expect(headerCell1.tagName).toBe('TH');
            expect(headerCell2.tagName).toBe('TH');
        });
    });

    describe('When isHeader is false', () => {
        test('renders correctly two td elements within a tr element', () => {
            const { getByText } = render(
                <CourseListRow isHeader={false} textFirstCell="Data 1" textSecondCell="Data 2" />
            );
            const dataCell1 = getByText('Data 1');
            const dataCell2 = getByText('Data 2');
            expect(dataCell1.tagName).toBe('TD');
            expect(dataCell2.tagName).toBe('TD');
        });
    });
});
