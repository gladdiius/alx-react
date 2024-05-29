import './Notifications.css'
import React from "react";
import close from "./close-icon.png"
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';

export default function Notfications({displayDrawer = true}){
    return(
        <>
        <div className='notificatonWrapper'>
        <div className='menuItem'>
            <p>Your notifications</p>
        </div>

        {displayDrawer && <div className="Notifications">
            <div style={{display:'flex', alignItems: 'center', justifyContent:'space-between'}}>
            <p>Here is the list of notifications</p>
                <button aria-label='close' type="button" 
                                           onClick={()=>console.log('Close button has been clicked')}
                                           style={{
                                            border:'none', 
                                            backgroundColor:'white'}}>
                                                        <img className="closeImage" src={close} alt=""/>
                                                            </button>
            </div>
            <ul>
                <NotificationItem type="default"  value="New course available" />
                <NotificationItem type="default"  value="New resume available" />
                <NotificationItem type="default" html={{ __html: '<b>Urgent requirment</b> - complete by EOD' }} value="Some text value" />
            </ul>
        </div>
        }
        </div>
        </>
    );
}

Notfications.propTypes = {
    isLoggedIn: PropTypes.bool,
};
