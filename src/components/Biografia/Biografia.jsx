import React from 'react'
import { Link } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
const Biografia = () => {
  return (
    <div>
      <NavBar/>
         <button><Link to={'/'}>Home</Link></button>
      <p>biografia</p>
    </div>
  )
}

export default Biografia
