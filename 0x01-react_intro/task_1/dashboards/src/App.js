import './App.css';
import React from 'react';
import {getFullYear, getFooterCopy} from './utils'
import holbertonLoge from './Holberton_Logo.jpg'
function App() {
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
