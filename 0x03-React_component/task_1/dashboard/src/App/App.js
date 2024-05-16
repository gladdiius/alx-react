import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
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

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (event) => {
    if (event.ctrlKey && event.key === 'h') {
      event.preventDefault();
      alert('Logging you out');
      this.props.logOut(); // Call the logOut function passed as prop
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
        <div className='header-wrapper'>
          <Header />
          <Notifications displayDrawer={true} listNotifications={listNotifications} />
        </div>
        {loggedIn ? (
          <CourseList listCourses={listCourses} />
        ) : (
          <Login />
        )}
        <Footer />
      </>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func.isRequired,
};

App.defaultProps = {
  logOut: () => {},
};

export default App;
