import React from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import ReactDOM from 'react-dom/client';
import ReactDOM from 'react-dom/client';

import {BrowserRouter,Route,Routes} from 'react-router-dom'
import { Link } from 'react-router-dom';

import './index.css';
import doctor from './doctor(2).png';
import patient from './patient(1).png';

import PatientPortal from './PatientPortal';
import reportWebVitals from './reportWebVitals';
import Patregis from './patregis';
import Main from './main';
function App() {

  return (
    <BrowserRouter>
    <Routes> 
      <Route path="/" element={<PatientPortal/>}/>
        <Route path="register" element={<Patregis/>} />
        <Route path="mainpage" element={<Main/>}/>
    </Routes>
        
    </BrowserRouter>

  );
}

export default App;