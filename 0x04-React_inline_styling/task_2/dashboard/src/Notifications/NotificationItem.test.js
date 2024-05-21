// NotificationItem.test.js
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NotificationItem from './NotificationItem';

describe('NotificationItem Component', () => {
  test('renders without crashing', () => {
    render(<NotificationItem type="default" value="Test Notification" />);
  });

  test('renders notification item with default type', () => {
    const { getByText } = render(<NotificationItem type="default" value="Test Notification" />);
    const notificationItem = getByText('Test Notification');
    expect(notificationItem).toBeInTheDocument();
    expect(notificationItem).toHaveAttribute('data-notification-type', 'default');
    expect(notificationItem).toHaveStyle('color: black');
    expect(notificationItem).toHaveStyle('font-style: normal');
  });

  test('renders notification item with urgent type', () => {
    const { getByText } = render(
      <NotificationItem type="urgent" value="Urgent Notification" />
    );
    const notificationItem = getByText('Urgent Notification');
    expect(notificationItem).toBeInTheDocument();
    expect(notificationItem).toHaveAttribute('data-notification-type', 'urgent');
    expect(notificationItem).toHaveStyle('color: red');
    expect(notificationItem).toHaveStyle('font-style: italic');
  });

  test('renders notification item with html content', () => {
    const { getByText } = render(
      <NotificationItem type="default" html={{ __html: '<b>HTML Notification</b>' }} />
    );
    const notificationItem = getByText('HTML Notification');
    expect(notificationItem).toBeInTheDocument();
    expect(notificationItem).toHaveAttribute('data-notification-type', 'default');
    expect(notificationItem.querySelector('b')).toBeInTheDocument();
  });

  // Add more tests as needed for prop validation
});
