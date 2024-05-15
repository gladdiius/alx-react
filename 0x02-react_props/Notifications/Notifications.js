import './Notifications.css'
import React from "react";
import close from "./close-icon.png";
import NotificationItem from './NotificationItem';

function Notifications({ displayDrawer }) {
    return (
        <div>
            <div className="menuItem">Your notifications</div>
            {displayDrawer && (
                <div className="Notifications">
                    <div style={{display:'flex', alignItems: 'center', justifyContent:'space-between'}}>
                        <p>Here is the list of notifications</p>
                        <button aria-label='close' type="button" 
                                onClick={()=>console.log('Close button has been clicked')}
                                style={{ border:'none', backgroundColor:'white'}}>
                            <img className="closeImage" src={close} alt=""/>
                        </button>
                    </div>
                    <ul>
                        <NotificationItem type="default" html={{ __html: '<u>test</u>' }} value="Test notification" />
                    </ul>
                </div>
            )}
        </div>
    );
}

Notifications.defaultProps = {
    displayDrawer: false
};

export default Notifications;
