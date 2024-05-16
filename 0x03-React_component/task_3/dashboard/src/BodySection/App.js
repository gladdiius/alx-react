import React from 'react';
import Notifications from './Notifications'; 
import Header from './Header';
import Footer from './Footer';
import Login from './Login';
import CourseList from './CourseList';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';
import BodySection from './BodySection';

function App({ isLoggedIn = true }) {
  const listCourses = [
    { id: 1, name: 'ES6', credit: 60 },
    { id: 2, name: 'Webpack', credit: 20 },
    { id: 3, name: 'React', credit: 40 }
  ];

  return (
    <>
      <div className='header-wrapper'>
        <Header />
        <Notifications displayDrawer={true} />
      </div>
      <BodySectionWithMarginBottom title="Course list">
        <CourseList listCourses={listCourses} />
      </BodySectionWithMarginBottom>
      {isLoggedIn ? (
        null // No need for a BodySectionWithMarginBottom for CourseList when logged in
      ) : (
        <BodySectionWithMarginBottom title="Log in to continue">
          <Login />
        </BodySectionWithMarginBottom>
      )}
      <BodySection title="News from the School">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida nunc nec aliquet viverra.</p>
      </BodySection>
      <Footer />
    </>
  );
}

export default App;
