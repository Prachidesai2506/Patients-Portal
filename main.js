import React from 'react';
import logo from './social-support.png';
import './index.css';
import profile from './patient.png'
import appointment from './doctor-consultation.png'
import history from './examination(1).png'
import help from './help-desk.png'
function main(){
  return(  
    <div>
       <header>
        <img src={logo} alt="l"  />
        <h1>MEDIsync</h1>
        <p>logout</p></header>
    
   <div className='mainbar'>
  
    <div className='navs' id='profile'><p>Profile</p> <img src={profile} alt="" className='images'/></div>
    <div className='navs' id='appointment'><p>Appointment Allocation</p> <img src={appointment} alt="" className='images' /></div>
    <div className='navs' id='history'><p>Medical History </p><img src={history} alt="" className='images'/></div>
    <div className='navs' id='help'><p>Help</p><img src={help} alt="" className='images' /></div>
  
  </div>

    </div>
  
   
  )
}
export default main;
