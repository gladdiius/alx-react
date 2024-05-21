// Header.test.js
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from './Header';

describe('Header Component', () => {
  test('renders without crashing', () => {
    const { getByText, getByAltText } = render(<Header />);
    expect(getByText('School dashboard')).toBeInTheDocument();
    expect(getByAltText('Holberton Logo')).toBeInTheDocument();
  });

  test('applies correct styles', () => {
    const { getByRole } = render(<Header />);
    const headerElement = getByRole('banner');
    expect(headerElement).toHaveStyle('border-bottom: 3px solid hsl(9, 87%, 49%)');
    expect(headerElement).toHaveStyle('margin: 0');
  });
});
