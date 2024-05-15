import React from 'react';
import PropTypes from 'prop-types';

function NotificationItem({ type, html, value }) {
  return (
    <li data-notification-type={type}>
      {html ? <span dangerouslySetInnerHTML={html}></span> : value}
    </li>
  );
}

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  html: PropTypes.shape({
    __html: PropTypes.string.isRequired
  }),
  value: PropTypes.string
};

export default NotificationItem;
