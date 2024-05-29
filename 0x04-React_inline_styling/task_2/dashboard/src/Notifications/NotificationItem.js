import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

function NotificationItem({ type, html, value }) {
  const styles = StyleSheet.create({
    notificationItem: {
      color: type === 'urgent' ? 'red' : 'black',
      fontStyle: type === 'urgent' ? 'italic' : 'normal',
    }
  });

  return (
    <li className={css(styles.notificationItem)} data-notification-type={type}>
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
