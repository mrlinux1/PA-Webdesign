import React from 'react';
import './App.css';
import HomepageImage from './components/HomepageImage'
//import Visitors from './components/drinks-old'
import {DrinksProvider} from './drinks-context'
//import Dummy from './Dummy'
import MyChart5 from './components/mychart5';
//import MyChart6 from './components/mychart6';


function App() {
  return (
    <div class="ab1">
<div><HomepageImage />    </div>
   
  
    <div>
        <DrinksProvider>
          <MyChart5 />
          
        </DrinksProvider>
      
    </div>
    </div>
    
  );
}

export default App;
