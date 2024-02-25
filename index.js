import React from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import ReactDOM from 'react-dom/client';
import ReactDOM from 'react-dom/client';

import {BrowserRouter,Route,Routes} from 'react-router-dom'
import { Link } from 'react-router-dom';

import './index.css';
import doctor from './doctor(2).png';
import patient from './patient(1).png';
import App from './App';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();