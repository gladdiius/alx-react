import React from "react";
import { StyleSheet, css } from 'aphrodite';
import close from "./close-icon.png";
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';

export default function Notfications({ displayDrawer = true }) {
    return (
        <div className={css(styles.notificationWrapper)}>
            <div className={css(styles.menuItem)}>
                <p>Your notifications</p>
            </div>

            {displayDrawer && <div className={css(styles.notifications)}>
                <div className={css(styles.header)}>
                    <p className={css(styles.headerText)}>Here is the list of notifications</p>
                    <button
                        aria-label='close'
                        type="button"
                        onClick={() => console.log('Close button has been clicked')}
                        className={css(styles.closeButton)}
                    >
                        <img className={css(styles.closeImage)} src={close} alt="" />
                    </button>
                </div>
                <ul className={css(styles.notificationList)}>
                    <NotificationItem type="default" value="New course available" />
                    <NotificationItem type="default" value="New resume available" />
                    <NotificationItem type="default" html={{ __html: '<b>Urgent requirement</b> - complete by EOD' }} value="Some text value" />
                </ul>
            </div>}
        </div>
    );
}

const styles = StyleSheet.create({
    notificationWrapper: {
        width: '100vw',
        height: '100vh',
        position: 'absolute',
        top: 0,
        left: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    menuItem: {
        // your menu item styles
    },
    notifications: {
        backgroundColor: 'white',
        padding: 0,
        fontSize: '20px',
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px',
    },
    headerText: {
        // your header text styles
    },
    closeButton: {
        border: 'none',
        backgroundColor: 'transparent',
        cursor: 'pointer',
    },
    closeImage: {
        // your close image styles
    },
    notificationList: {
        listStyleType: 'none',
        padding: 0,
    },
});

Notfications.propTypes = {
    isLoggedIn: PropTypes.bool,
};
