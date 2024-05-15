import './App.css';
import React from 'react';
import Notifications from './Notifications';
import Header from './Header';
import Footer from './Footer';
import Login from './Login';

function App({ isLoggedIn = true }) {
    const listNotifications = [
        {
            id: 1,
            type: "default",
            value: "New course available"
        },
        {
            id: 2,
            type: "default",
            value: "New resume available"
        },
        {
            id: 3,
            type: "default",
            html: { __html: '<b>Urgent requirement</b> - complete by EOD' },
            value: "Some text value"
        }
    ];

    return (
        <>
            <div className='header-wrapper'>
                <Header />
                <Notifications listNotifications={listNotifications} /> {/* Pass listNotifications as a prop */}
            </div>
            {isLoggedIn ? (
                <p>User is logged in</p>
            ) : (
                <Login />
            )}
            <Footer />
        </>
    );
}

export default App;
