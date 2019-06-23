import React from 'react';
import Fade from 'react-reveal/Fade';
import welcome from '../img/Welcome.jpg';
import './Welcome.css';

function Welcome(){
  return(
    <div className='welcomeWrap'>
      <Fade top>
        <h1> Добро пожаловать</h1>
        <img src={welcome} className='welcomeImg'/>
      </Fade>
    </div>
    )
}
export default Welcome;