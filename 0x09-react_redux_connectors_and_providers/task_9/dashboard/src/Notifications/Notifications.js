import React from 'react';

const Notifications = ({ notifications, filter, setNotificationFilter }) => {
  const handleFilterClick = (type) => {
    setNotificationFilter(type);
  };

  return (
    <div>
      <p>Here is the list of notifications.</p>
      <button onClick={() => handleFilterClick('urgent')}>‼️</button>
      <button onClick={() => handleFilterClick('default')}>💠</button>
      {notifications.map(notification => (
        <div key={notification.id}>
          <p>{notification.value}</p>
        </div>
      ))}
    </div>
  );
};

export default Notifications;
