import React, { Component } from 'react';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import AppContext from './AppContext'; // Update the import path if necessary
import { StyleSheet, css } from 'aphrodite';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        isLoggedIn: false,
        email: '',
        password: ''
      },
      listNotifications: [
        { id: 1, type: 'default', value: 'New course available' },
        { id: 2, type: 'urgent', value: 'New resume available' },
        { id: 3, type: 'urgent', html: { __html: '<b>Urgent requirement</b> - complete by EOD' } }
      ]
    };
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
    this.markNotificationAsRead = this.markNotificationAsRead.bind(this);
  }

  logIn(email, password) {
    this.setState({
      user: {
        isLoggedIn: true,
        email: email,
        password: password
      }
    });
  }

  logOut() {
    this.setState({
      user: {
        isLoggedIn: false,
        email: '',
        password: ''
      }
    });
  }

  markNotificationAsRead(id) {
    this.setState(prevState => ({
      listNotifications: prevState.listNotifications.filter(notification => notification.id !== id)
    }));
  }

  render() {
    const { user, listNotifications } = this.state;

    return (
      <AppContext.Provider value={{ user, listNotifications, logIn: this.logIn, logOut: this.logOut, markNotificationAsRead: this.markNotificationAsRead }}>
        <div className={css(style.container)}>
          <Header />
          <div className={css(style.body)}>
            {user.isLoggedIn ? <CourseList /> : <Login />}
            <div className={css(style.notificationsContainer)}>
              <Notifications />
            </div>
          </div>
          <Footer />
        </div>
      </AppContext.Provider>
    );
  }
}

const style = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
  },
  body: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationsContainer: {
    position: 'absolute',
    top: '20px',
    right: '20px',
  },
});

export default App;
