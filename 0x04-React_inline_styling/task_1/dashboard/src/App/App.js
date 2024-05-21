import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import Notifications from './Notifications'; 
import Header from './Header';
import Footer from './Footer';
import Login from './Login';
import CourseList from './CourseList';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: this.props.isLoggedIn,
      listNotifications: [
        { id: 1, type: 'default', html: { __html: '<u>Test Notification 1</u>' }, value: 'Test Notification 1' },
        { id: 2, type: 'urgent', html: { __html: '<u>Test Notification 2</u>' }, value: 'Test Notification 2' },
      ],
    };
  }

  handleLabelClick = (inputId) => {
    const inputElement = document.getElementById(inputId);
    if (inputElement) {
      inputElement.focus();
    }
  };

  render() {
    const { loggedIn, listNotifications } = this.state;

    const listCourses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 }
    ];

    return (
      <>
        <div className={css(styles.headerWrapper)}>
          <Header />
          <Notifications displayDrawer={true} listNotifications={listNotifications} />
        </div>
        {loggedIn ? (
          <CourseList listCourses={listCourses} />
        ) : (
          <Login />
        )}
        <Footer className={css(styles.footer)} />
      </>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

App.defaultProps = {
  isLoggedIn: false,
};

const styles = StyleSheet.create({
  body: {
    fontFamily: 'Arial, Helvetica, sans-serif',
    height: '70vh',
    fontWeight: 100,
    margin: 0,
  },
  footer: {
    height: '30vh',
    borderTop: '1px solid black',
  },
  headerWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
  },
});

export default App;
