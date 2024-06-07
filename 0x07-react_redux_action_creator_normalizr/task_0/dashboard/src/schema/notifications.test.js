// getAllNotificationsByUser.test.js
import { getAllNotificationsByUser } from './yourFunctionFile';
import notificationsData from './notifications.json';

// Mock the notifications data
jest.mock('./notifications.json', () => ({
  default: [
    { id: 1, author: { id: 'user1' }, context: 'Notification 1 for user1' },
    { id: 2, author: { id: 'user2' }, context: 'Notification 2 for user2' },
    { id: 3, author: { id: 'user1' }, context: 'Notification 3 for user1' },
    { id: 4, author: { id: 'user3' }, context: 'Notification 4 for user3' },
  ],
}));

describe('getAllNotificationsByUser', () => {
  it('should return notifications for the specified user', () => {
    const userId = 'user1';
    const expectedNotifications = ['Notification 1 for user1', 'Notification 3 for user1'];
    
    const result = getAllNotificationsByUser(userId);
    
    expect(result).toEqual(expectedNotifications);
  });

  it('should return an empty array if the user has no notifications', () => {
    const userId = 'nonExistingUser';
    const expectedNotifications = [];
    
    const result = getAllNotificationsByUser(userId);
    
    expect(result).toEqual(expectedNotifications);
  });

  it('should return notifications for another user', () => {
    const userId = 'user2';
    const expectedNotifications = ['Notification 2 for user2'];
    
    const result = getAllNotificationsByUser(userId);
    
    expect(result).toEqual(expectedNotifications);
  });
});
