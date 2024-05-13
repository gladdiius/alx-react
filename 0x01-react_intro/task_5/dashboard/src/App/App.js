import './App.css';
import React from 'react';
import {getFullYear, getFooterCopy} from './utils'
import holbertonLoge from './Holberton_Logo.jpg'
function App() {
  const handleLabelClick = (inputId) => {
    const inputElement = document.getElementById(inputId);
    if (inputElement) {
      inputElement.focus();
    }
  };
  return (
    <div className="App">
      <header>
        <div className="App-header">
          <img src={holbertonLoge} className='hol_logo' alt=''/>
          <h1>School dashboard</h1>
        </div>
      </header>
      <body>
        <div className="App-body">
          <p>Login to access the full dashboard</p>
          
          <div className='form' style={{display: 'flex', flexDirection: 'row'}}>

            <label htmlFor="email" onClick={() => handleLabelClick('email')}>Email:</label>
            <input id="email" type='text'/>
          
            <label htmlFor="password" onClick={() => handleLabelClick('password')}>Password:</label>
            <input id="password" type='text'/>
          
            <button>OK</button>
          </div>
        </div>
    
      </body>
      <footer>
        <div className="App-footer">
          <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
