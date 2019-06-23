import React from 'react';
import './Preloader.css';
import loader from '../img/preloader.svg';

function Preloader (){
  return(
      <div className='preloader'>
        <img src={loader} className="loader" alt="loader"/>
      </div>
    )
}

export default Preloader;