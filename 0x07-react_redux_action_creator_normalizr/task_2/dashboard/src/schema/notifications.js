import { normalizedData } from './normalizeData';

// Function to get all notifications by user
export function getAllNotificationsByUser(userId) {
  const userNotifications = [];

  for (const notificationId of normalizedData.result) {
    const notification = normalizedData.entities.notifications[notificationId];
    if (notification.author === userId) {
      const message = normalizedData.entities.messages[notification.context];
      userNotifications.push(message.text);
    }
  }

  return userNotifications;
}
