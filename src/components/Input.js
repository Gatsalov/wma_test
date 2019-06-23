import React from 'react';
import './Input.css';

function Input( { type, placeholder, customClass, commonClass, value, inputHandler } ){
  return(
      <div>
        <input 
          type={ type } 
          placeholder={ placeholder } 
          className={ customClass + commonClass} 
          value={ value } 
          onChange={ inputHandler }
          name={ customClass }/>
      </div>
    )
}

export default Input;