import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

// Test for getFullYear function
test('getFullYear returns the current year', () => {
  const currentYear = new Date().getFullYear();
  expect(getFullYear()).toBe(currentYear);
});

// Test for getFooterCopy function
test('getFooterCopy returns correct string when argument is true', () => {
  expect(getFooterCopy(true)).toBe('Holberton School');
});

test('getFooterCopy returns correct string when argument is false', () => {
  expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
});

// Test for getLatestNotification function
test('getLatestNotification returns correct string', () => {
  const notification = getLatestNotification();
  // Replace this with the actual expected string returned by getLatestNotification
  const expectedNotification = "Your latest notification message";
  expect(notification).toBe(expectedNotification);
});
