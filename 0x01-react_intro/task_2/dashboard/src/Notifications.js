import './Notifications.css'
import React from "react";
import close from "./close-icon.png"
import {getLatestNotification} from './utils'
export default function Notfications(){
    return(
        <div className="Notifications">
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
                <li data-priority="default" >New course available</li>
                <li data-priority="urgent" >New resume available</li>
                <li dangerouslySetInnerHTML={{ __html: getLatestNotification() }} />
            </ul>
        </div>
    );
}