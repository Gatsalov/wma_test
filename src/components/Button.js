import React from 'react';
import './Button.css';

function Button({ value, clickHandler }){
  return (
      <div className='button-wrap flex-r'>
        <input type='submit' value={ value } className='submit' onClick={ clickHandler }/>
      </div>
    )
}
export default Button;