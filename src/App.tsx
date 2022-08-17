import React from 'react';
import logo from './Onyinye.ng.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to Onyinye.ng
        </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Coming soon...
        </a> */}
      </header>
    </div>
  );
}

export default App;
