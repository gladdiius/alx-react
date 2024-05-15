import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import Notifications from './Notifications'; 
import Header from './Header';
import Footer from './Footer';
import Login from './Login';
import CourseList from './CourseList'; // Import the CourseList component

function App({ isLoggedIn }) { // Accept isLoggedIn as a prop
  const handleLabelClick = (inputId) => {
    const inputElement = document.getElementById(inputId);
    if (inputElement) {
      inputElement.focus();
    }
  };

  return (
    <>
      <Notifications />
      <div className="App">
        <Header />
        <div className="App-body">
          {isLoggedIn ? <CourseList /> : <Login />} {/* Conditionally render Login or CourseList */}
        </div>
        <Footer />
      </div>
    </>
  );
}

App.propTypes = {
  isLoggedIn: PropTypes.bool // Validate isLoggedIn prop as a boolean
};

App.defaultProps = {
  isLoggedIn: false // Set default value of isLoggedIn to false
};

export default App;
