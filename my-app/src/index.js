import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Visitors from './components/Visitors'
import * as serviceWorker from './serviceWorker';
import MyChart from './components/mychart';

ReactDOM.render(
  // <React.StrictMode>
     <Visitors />
  // </React.StrictMode>,
   ,document.getElementById('root')
 );
 ReactDOM.render(
  // <React.StrictMode>
     <MyChart />
  // </React.StrictMode>,
   ,document.getElementById('root')
 );
  
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
