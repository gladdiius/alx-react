import React, { Component } from 'react';
import Notifications from './Notifications';
import Header from './Header';
import Footer from './Footer';
import PropTypes from 'prop-types';
import Login from './Login';
import CourseList from './CourseList';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';
import BodySection from './BodySection';
import { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux';
import { displayNotificationDrawer, hideNotificationDrawer } from '../actions/uiActionCreators';

class App extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
    document.body.classList.add(css(style.body));
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
    document.body.classList.remove(css(style.body));
  }

  handleKeyDown = (event) => {
    if (event.ctrlKey && event.key === 'h') {
      alert('Logging you out');
      this.props.logOut();
    }
  };

  render() {
    const { isLoggedIn, displayNotificationDrawer, hideNotificationDrawer } = this.props;

    return (
      <>
        <div className={css(style.headerWrapper)}>
          <Header />
          <Notifications
            handleDisplayDrawer={displayNotificationDrawer}
            handleHideDrawer={hideNotificationDrawer}
          />
        </div>
        {isLoggedIn ? (
          <BodySectionWithMarginBottom title='Course list'>
            <CourseList />
          </BodySectionWithMarginBottom>
        ) : (
          <BodySectionWithMarginBottom title='Log in to continue'>
            <Login />
          </BodySectionWithMarginBottom>
        )}
        <BodySection title='News from the School'>
          <p>Hello everyone,</p>
        </BodySection>
        <Footer />
      </>
    );
  }
}

const style = StyleSheet.create({
  headerWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    borderBottom: '3px solid red'
  },
  body: {
    fontFamily: 'Arial, Helvetica, sans-serif',
    height: '70vh',
    fontWeight: '100px',
    margin: '0'
  }
});

App.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  displayNotificationDrawer: PropTypes.func.isRequired,
  hideNotificationDrawer: PropTypes.func.isRequired,
};

App.defaultProps = {
  isLoggedIn: false,
  displayNotificationDrawer: () => {},
  hideNotificationDrawer: () => {},
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.get('isUserLoggedIn'),
  };
};

const mapDispatchToProps = {
  displayNotificationDrawer,
  hideNotificationDrawer,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
