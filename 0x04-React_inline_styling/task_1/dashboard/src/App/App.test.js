// App.test.js
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

describe('App Component', () => {
  test('renders without crashing', () => {
    render(<App />);
  });

  test('renders Login component when not logged in', () => {
    const { getByText } = render(<App isLoggedIn={false} />);
    expect(getByText('Login to access the full dashboard')).toBeInTheDocument();
  });

  test('renders CourseList component when logged in', () => {
    const { getByText } = render(<App isLoggedIn={true} />);
    expect(getByText('Available courses')).toBeInTheDocument();
    expect(getByText('Course name')).toBeInTheDocument();
  });

  // Add more tests as needed
});
