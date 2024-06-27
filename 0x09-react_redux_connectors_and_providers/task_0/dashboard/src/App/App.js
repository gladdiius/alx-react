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
import { logOut } from './actions/uiActions';  // Assuming you have this action creator
import mapStateToProps from './mapStateToProps';  // Your mapStateToProps function

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listNotifications: [
        { id: 1, type: 'default', value: 'New course available' },
        { id: 2, type: 'urgent', value: 'New resume available' },
        { id: 3, type: 'urgent', html: { __html: '<b>Urgent requirement</b> - complete by EOD' } }
      ],
      displayDrawer: false
    };
  }

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

  handleDisplayDrawer = () => {
    this.setState({ displayDrawer: true });
  };

  handleHideDrawer = () => {
    this.setState({ displayDrawer: false });
  };

  render() {
    const { listNotifications, displayDrawer } = this.state;
    const { isLoggedIn } = this.props;

    return (
      <>
        <div className={css(style.headerWrapper)}>
          <Header />
          <Notifications
            listNotifications={listNotifications}
            displayDrawer={displayDrawer}
            handleDisplayDrawer={this.handleDisplayDrawer}
            handleHideDrawer={this.handleHideDrawer}
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
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
};

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {},
};

export default connect(mapStateToProps, { logOut })(App);
