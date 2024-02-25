import React from 'react';
import { Link } from 'react-router-dom';

import doctor from './doctor(2).png';
import patient from './patient(1).png';
import './index.css';
import Main from './main'
function PatientPortal(){
  
  const doclogin = () => {};

  const patlogin = () => {};
  return(  
    
    <div className='main'>
    <div className='logo'>
      <h1>MEDIsync</h1>
      <p>Wellness in Your Hands, Anytime, Anywhere !!!</p>
    </div>
    <div className='loginarea'>
      <div className='logon'>
        <div className='switch'>
          <button className='s' id='doctor' onClick={doclogin}>
            <img src={doctor} alt="doctor" className='doc' /><p>Doctor</p>
          </button>
          <button className='s' id='patient' onClick={patlogin}>
            <img src={patient} alt="patient" className='pat' /><p>Patient</p>
          </button>
        </div>
        <h1 className='login'>Login</h1>
        <div className='data_pat' >
          <input type="text" placeholder='email'  />
          <br />
          <input type="number" placeholder='Application no' />
        </div>
        <div className='data_doc' >
          <input type="text" placeholder='email' />
          <br />
          <input type="password" placeholder='password' />
        </div>
        <Link to="/mainpage"><button className='submit'>Login</button></Link>
         <div className="reg">
        <Link to="/register" className='register'>Not yet Registered?</Link>
        </div>
</div>
    </div>
  </div>
   
  )
}
export default PatientPortal;
// ReactDOM.render(<Login/>,document.getElementById('log'))