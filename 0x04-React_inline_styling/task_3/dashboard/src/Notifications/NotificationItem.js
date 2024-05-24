import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

function NotificationItem({ type, html, value }) {
  const styles = StyleSheet.create({
    notificationItem: {
      width: '100%',
      borderStyle: 'solid',
      borderWidth: '0 0 1px',
      borderColor: 'black',
      padding: '10px 8px',
      fontSize: '20px',
      boxSizing: 'border-box',
      display: 'block',
      overflowWrap: 'break-word',
    },
    urgent: {
      color: 'red',
      fontStyle: 'italic',
    }
  });

  return (
    <li className={`${css(styles.notificationItem)} ${type === 'urgent' ? css(styles.urgent) : ''}`} data-notification-type={type}>
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
