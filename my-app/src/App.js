import React from 'react';
import './App.css';
//import HomepageImage from './components/HomepageImage'
//import Visitors from './components/drinks-old'
import {DrinksProvider} from './drinks-context'
//import Dummy from './Dummy'
//import MyChart5 from './components/mychart5';
import ChartJsTest from './components/ChartJsTest';
//import ChartJsTest from './components/ChartJsTest';
//import MyChart8 from './components/mychart8';


function App() {
  return (
    <div className="App">
    <div>Alcohol consumption by countries</div>
    <div>
        <DrinksProvider>
          <ChartJsTest />
         </DrinksProvider>
      
    </div>
  </div>    
  );
}

export default App;
