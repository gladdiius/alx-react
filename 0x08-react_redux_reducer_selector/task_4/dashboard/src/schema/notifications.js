// schema/notifications.js

import { schema } from 'normalizr';

export const notificationSchema = new schema.Entity('notifications');

export const notificationsNormalizer = data => {
  return normalize(data, [notificationSchema]);
};
