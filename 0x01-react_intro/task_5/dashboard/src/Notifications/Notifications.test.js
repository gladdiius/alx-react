import React from 'react';
import { render } from '@testing-library/react';
import Notifications from './Notifications';

test('renders Notifications without crashing', () => {
  render(<Notifications />);
});

test('renders Notifications with three list items', () => {
  const { getAllByRole } = render(<Notifications />);
  const listItems = getAllByRole('listitem');
  expect(listItems).toHaveLength(3);
});

test('renders Notifications with the text "Here is the list of notifications"', () => {
  const { getByText } = render(<Notifications />);
  const textElement = getByText('Here is the list of notifications');
  expect(textElement).toBeInTheDocument();
});
