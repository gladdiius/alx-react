import React from "react";
import { StyleSheet, css } from 'aphrodite';
import close from "./close-icon.png";
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';

export default function Notifications({ displayDrawer = true }) {
    const styles = StyleSheet.create({
        menuItem: {
            position: 'fixed',
            top: '10px',
            right: '10px',
            backgroundColor: '#fff8f8',
            padding: '10px',
            borderRadius: '5px',
            cursor: 'pointer',
            zIndex: '999',
            '@media (max-width: 768px)': {
                display: displayDrawer ? 'none' : 'block'
            },
            ':hover': {
                animationName: [bounce, opacityChange],
                animationDuration: '0.5s, 1s',
                animationIterationCount: '3, 3',
                animationDirection: 'alternate',
            }
        },
        header: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '10px',
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

    const bounce = {
        '0%': {
            transform: 'translateY(0px)',
        },
        '50%': {
            transform: 'translateY(-5px)',
        },
        '100%': {
            transform: 'translateY(5px)',
        }
    };

    const opacityChange = {
        '0%': {
            opacity: '0.5',
        },
        '100%': {
            opacity: '1',
        }
    };

    return (
        <div>
            <div className={css(styles.menuItem)}>
                Notifications
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

Notifications.propTypes = {
    isLoggedIn: PropTypes.bool,
};
