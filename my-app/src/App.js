import React from 'react';
import './App.css';
//import HomepageImage from './components/HomepageImage'
//import Visitors from './components/drinks-old'
import {DrinksProvider} from './drinks-context'
import Dummy from './Dummy'
import MyChart5 from './components/mychart5';


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
          <MyChart5 />
        </DrinksProvider>
      </header>
    </div>
    
  );
}

export default App;
