import React from 'react';

// Default user object
const defaultUser = {
  email: '',
  password: '',
  isLoggedIn: false,
};

// Default logOut function
const defaultLogOut = () => {
  console.log('User logged out');
};

// Create a context with the default values
const AppContext = React.createContext({
  user: defaultUser,
  logOut: defaultLogOut,
});

export default AppContext;
