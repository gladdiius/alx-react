import React from 'react';
import './Login.css'
function LoginForm({ handleLabelClick }) {
  return (
    <>
    <div className="App-body">
      <p>Login to access the full dashboard</p>

      <div className='form' style={{ display: 'flex', flexDirection: 'row' }}>
        <div style={{ marginRight: '10px' }}>
          <label htmlFor="email" onClick={() => handleLabelClick('email')}>Email:</label>
          <input id="email" type='text' />
        </div>

        <div style={{ marginRight: '10px' }}>
          <label htmlFor="password" onClick={() => handleLabelClick('password')}>Password:</label>
          <input id="password" type='text' />
        </div>
      </div>
    </div>
    </>
  );
}

export default LoginForm;
