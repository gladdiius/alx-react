import React, { Component } from 'react';
import close from './close-icon.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayDrawer: props.displayDrawer,
    };
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.listNotifications.length > this.props.listNotifications.length;
  }

  makeAsRead = (id) => {
    console.log(`Notification ${id} has been marked as read`);
  };

  handleCloseClick = () => {
    console.log('Close button has been clicked');
    this.setState({ displayDrawer: false });
  };

  render() {
    const { displayDrawer } = this.state;
    const { listNotifications } = this.props;

    return (
      <div className={css(style.notificatonWrapper)}>
        <div className={css(style.menuItem)}>
          <p>Your notifications</p>
        </div>

        {displayDrawer && (
          <div className={css(style.notifications)}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <p>Here is the list of notifications</p>
              <button
                aria-label='close'
                type='button'
                onClick={this.handleCloseClick}
                style={{
                  border: 'none',
                  backgroundColor: 'white',
                }}
              >
                <img className='closeImage' src={close} alt='close icon' />
              </button>
            </div>
            <ul>
              {listNotifications.map((notification) => (
                <NotificationItem
                  key={notification.id}
                  type={notification.type}
                  value={notification.value}
                  html={notification.html}
                  makeAsRead={() => this.makeAsRead(notification.id)}
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
  
  notificatonWrapper:{
    display: 'flex',
    flexDirection: 'column',
    float: 'right',
    margin: '0',
    width: '600px'
  },

  notifications:{
    border: '2px dashed black' ,
    padding: '5px',
    margin: '0',
  },

  menuItem:{
    textAlign: 'end',
  }
})

Notifications.propTypes = {
  isLoggedIn: PropTypes.bool,
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      type: PropTypes.string,
      value: PropTypes.string,
      html: PropTypes.shape({
        __html: PropTypes.string,
      }),
    })
  ),
};

Notifications.defaultProps = {
  isLoggedIn: false,
  displayDrawer: true,
  listNotifications: [],
};

export default Notifications;
