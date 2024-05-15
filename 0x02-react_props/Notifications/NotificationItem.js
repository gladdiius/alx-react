import React from 'react';
import PropTypes from 'prop-types';

function NotificationItem({ type = 'default', html, value }) {
  // Check if html prop is provided and is an object with the key __html containing a string value
  if (!html || typeof html !== 'object' || !('__html' in html) || typeof html.__html !== 'string') {
    console.error('Invalid html prop for NotificationItem:', html);
    return null;
  }

  // Check if type prop is provided and is a string
  if (typeof type !== 'string') {
    console.error('Invalid type prop for NotificationItem:', type);
    return null;
  }

  // Check if value prop is provided and is a string
  if (typeof value !== 'string') {
    console.error('Invalid value prop for NotificationItem:', value);
    return null;
  }

  return (
    <li data-notification-type={type} dangerouslySetInnerHTML={html}>
      {value}
    </li>
  );
}

// Define prop types for NotificationItem component
NotificationItem.propTypes = {
  type: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string.isRequired
  }).isRequired,
  value: PropTypes.string.isRequired
};

export default NotificationItem;
