import React, { Component } from 'react';
import { connect } from 'react-redux';
import Notifications from './Notifications';
import Header from './Header';
import Footer from './Footer';
import PropTypes from 'prop-types';
import Login from './Login';
import CourseList from './CourseList';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';
import BodySection from './BodySection';
import { StyleSheet, css } from 'aphrodite';
import { loginRequest } from '../actions'; // Adjust the path as per your file structure

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
      this.props.logout(); // Example logout action from previous setup, adjust as needed
    }
  };

  render() {
    const { isLoggedIn, login } = this.props;

    return (
      <>
        <div className={css(style.headerWrapper)}>
          <Header />
          <Notifications />
        </div>
        {isLoggedIn ? (
          <BodySectionWithMarginBottom title='Course list'>
            <CourseList />
          </BodySectionWithMarginBottom>
        ) : (
          <BodySectionWithMarginBottom title='Log in to continue'>
            <Login login={login} /> {/* Pass login prop to Login component */}
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
  isLoggedIn: PropTypes.bool,
  login: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isLoggedIn: state.uiReducer.get('isUserLoggedIn'), // Example, adjust as per your actual state structure
});

const mapDispatchToProps = {
  login: loginRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
