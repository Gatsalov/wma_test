import React from 'react';
import './Logout.css'

function Logout( { logout } ){
  let signOut = (e)=>{
    e.preventDefault()
    logout()
  }
  return(
      <div className='logout'>
        <a href="#" onClick={signOut}>Выход</a>
      </div>
    )
}

export default Logout;