import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders App without crashing', () => {
  render(<App />);
});

test('renders App with App-header', () => {
  const { getByTestId } = render(<App />);
  const headerElement = getByTestId('app-header');
  expect(headerElement).toBeInTheDocument();
});

test('renders App with App-body', () => {
  const { getByTestId } = render(<App />);
  const bodyElement = getByTestId('app-body');
  expect(bodyElement).toBeInTheDocument();
});

test('renders App with App-footer', () => {
  const { getByTestId } = render(<App />);
  const footerElement = getByTestId('app-footer');
  expect(footerElement).toBeInTheDocument();
});
