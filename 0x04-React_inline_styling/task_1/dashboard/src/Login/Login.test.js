// LoginForm.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LoginForm from './LoginForm';

describe('LoginForm Component', () => {
  test('renders the login form correctly', () => {
    const { getByText, getByLabelText } = render(<LoginForm handleLabelClick={() => {}} />);
    expect(getByText('Login to access the full dashboard')).toBeInTheDocument();
    expect(getByLabelText('Email:')).toBeInTheDocument();
    expect(getByLabelText('Password:')).toBeInTheDocument();
  });

  test('calls handleLabelClick when labels are clicked', () => {
    const handleLabelClick = jest.fn();
    const { getByText } = render(<LoginForm handleLabelClick={handleLabelClick} />);
    
    fireEvent.click(getByText('Email:'));
    fireEvent.click(getByText('Password:'));
    
    expect(handleLabelClick).toHaveBeenCalledTimes(2);
    expect(handleLabelClick).toHaveBeenCalledWith('email');
    expect(handleLabelClick).toHaveBeenCalledWith('password');
  });

  test('inputs have the correct initial state', () => {
    const { getByLabelText } = render(<LoginForm handleLabelClick={() => {}} />);
    expect(getByLabelText('Email:')).toHaveValue('');
    expect(getByLabelText('Password:')).toHaveValue('');
  });
});
