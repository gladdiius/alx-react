import React, { Component } from 'react';
import PropTypes from 'prop-types';
import close from "./close-icon.png";
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';

class Notifications extends Component {
  shouldComponentUpdate(nextProps) {
    // Only update if the length of the new listNotifications is longer than the current one
    return nextProps.listNotifications.length > this.props.listNotifications.length;
  }

  render() {
    const { displayDrawer, listNotifications } = this.props;

    return (
      <div>
        <div className="menuItem">Your notifications</div>
        {displayDrawer && (
          <div className="Notifications">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <p>Here is the list of notifications</p>
              <button
                aria-label='close'
                type="button"
                onClick={() => console.log('Close button has been clicked')}
                style={{ border: 'none', backgroundColor: 'white' }}
              >
                <img className="closeImage" src={close} alt="" />
              </button>
            </div>
            {listNotifications.length > 0 ? (
              <ul>
                {listNotifications.map(notification => (
                  <NotificationItem
                    key={notification.id}
                    type={notification.type}
                    html={notification.html}
                    value={notification.value}
                  />
                ))}
              </ul>
            ) : (
              <p>No new notification for now</p>
            )}
          </div>
        )}
      </div>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool.isRequired,
  listNotifications: PropTypes.arrayOf(NotificationItemShape).isRequired
};

export default Notifications;
