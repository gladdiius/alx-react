import React, { PureComponent } from 'react';
import close from './close-icon.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

class Notifications extends PureComponent {
  render() {
    const { listNotifications, markNotificationAsRead } = this.props;

    return (
      <div className={css(style.notificatonWrapper)}>
        <div className={css(style.menuItem)}>
          <p>Your notifications</p>
        </div>

        {listNotifications.length > 0 && (
          <div className={css(style.Notifications)}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <p>Here is the list of notifications</p>
              <button
                aria-label='close'
                type="button"
                onClick={() => console.log('Close button has been clicked')}
                style={{
                  border: 'none',
                  backgroundColor: 'white'
                }}
              >
                <img className={css(style.closeImage)} src={close} alt="" />
              </button>
            </div>
            <ul>
              {listNotifications.map(notification => (
                <NotificationItem
                  key={notification.id}
                  type={notification.type}
                  value={notification.value}
                  html={notification.html}
                  markNotificationAsRead={markNotificationAsRead}
                />
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

const style = StyleSheet.create({
  notificatonWrapper: {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    top: '20px',
    right: '20px',
  },
  menuItem: {
    textAlign: 'right',
    marginBottom: '10px',
  },
  Notifications: {
    border: '2px dashed black',
    padding: '10px',
  },
  closeImage: {
    height: '15px',
    width: '15px',
  },
});

Notifications.propTypes = {
  listNotifications: PropTypes.array.isRequired,
  markNotificationAsRead: PropTypes.func.isRequired,
};

export default Notifications;
