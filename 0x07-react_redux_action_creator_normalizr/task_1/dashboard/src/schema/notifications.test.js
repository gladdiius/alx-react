// normalizeData.test.js
import { normalize, schema } from 'normalizr';
import { normalizedData, user, message, notification } from './yourNormalizationFile';
import notificationsData from './notifications.json';

// Mock the notifications data
jest.mock('./notifications.json', () => ({
  default: [
    { id: 1, author: { id: 'user1' }, context: { guid: 'msg1', text: 'Message 1' } },
    { id: 2, author: { id: 'user2' }, context: { guid: 'msg2', text: 'Message 2' } },
    { id: 3, author: { id: 'user1' }, context: { guid: 'msg3', text: 'Message 3' } },
    { id: 4, author: { id: 'user3' }, context: { guid: 'msg4', text: 'Message 4' } },
  ],
}));

describe('Data Normalization', () => {
  it('should normalize data correctly', () => {
    // Define expected normalized data structure
    const expectedEntities = {
      users: {
        user1: { id: 'user1' },
        user2: { id: 'user2' },
        user3: { id: 'user3' },
      },
      messages: {
        msg1: { guid: 'msg1', text: 'Message 1' },
        msg2: { guid: 'msg2', text: 'Message 2' },
        msg3: { guid: 'msg3', text: 'Message 3' },
        msg4: { guid: 'msg4', text: 'Message 4' },
      },
      notifications: {
        1: { id: 1, author: 'user1', context: 'msg1' },
        2: { id: 2, author: 'user2', context: 'msg2' },
        3: { id: 3, author: 'user1', context: 'msg3' },
        4: { id: 4, author: 'user3', context: 'msg4' },
      },
    };

    const expectedResult = {
      entities: expectedEntities,
      result: [1, 2, 3, 4],
    };

    // Check if the normalized data matches the expected result
    expect(normalizedData.entities).toEqual(expectedEntities);
    expect(normalizedData.result).toEqual(expectedResult.result);
  });
});
