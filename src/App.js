import React from 'react';
import './App.css';
import BoatList from './BoatList.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Boat Tracker</h1>
        <BoatList/>
        <p>
          More to come!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}



export default App;
