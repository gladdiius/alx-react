import './App.css';
import React, { useState } from 'react';
import Notifications from './Notifications'; 
import Header from './Header';
import Footer from './Footer';
import PropTypes from 'prop-types';
import Login from './Login';
import CourseList from './CourseList';

function App({ isLoggedIn = true }) {
  const [loggedIn] = useState(isLoggedIn);

  const listCourses = [
    { id: 1, name: 'ES6', credit: 60 },
    { id: 2, name: 'Webpack', credit: 20 },
    { id: 3, name: 'React', credit: 40 }
  ];

  const handleLabelClick = (inputId) => {
    const inputElement = document.getElementById(inputId);
    if (inputElement) {
      inputElement.focus();
    }
  };

  return (
    <>
      <div className='header-wrapper'>
        <Header />
        <Notifications />
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

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default App;
