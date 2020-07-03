import React from 'react';
import './App.css';
//import HomepageImage from './components/HomepageImage'
//import Visitors from './components/drinks-old'
import {DrinksProvider} from './drinks-context'
import Dummy from './Dummy'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          My first React website!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          
        </a>
        <DrinksProvider>
          <Dummy />
        </DrinksProvider>
      </header>
    </div>
    
  );
}

export default App;
