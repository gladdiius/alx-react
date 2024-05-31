import './Notifications.css';
import React from 'react';
import close from './close-icon.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';

export default function Notifications({ displayDrawer, handleDisplayDrawer, handleHideDrawer }) {
    return (
        <>
            <div className='notificationWrapper'>
                <div className='menuItem' onClick={handleDisplayDrawer}>
                    <p>Your notifications</p>
                </div>

                {displayDrawer && (
                    <div className="Notifications">
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <p>Here is the list of notifications</p>
                            <button
                                aria-label='close'
                                type="button"
                                onClick={handleHideDrawer}
                                style={{
                                    border: 'none',
                                    backgroundColor: 'white'
                                }}
                            >
                                <img className="closeImage" src={close} alt="close icon" />
                            </button>
                        </div>
                        <ul>
                            <NotificationItem type="default" value="New course available" />
                            <NotificationItem type="default" value="New resume available" />
                            <NotificationItem type="default" html={{ __html: '<b>Urgent requirement</b> - complete by EOD' }} />
                        </ul>
                    </div>
                )}
            </div>
        </>
    );
}

Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
    handleDisplayDrawer: PropTypes.func,
    handleHideDrawer: PropTypes.func
};

Notifications.defaultProps = {
    displayDrawer: false,
    handleDisplayDrawer: () => {},
    handleHideDrawer: () => {}
};
