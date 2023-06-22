import React from 'react'
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div>
      <button><Link to={'/proyectos'}>Proyectos</Link></button>
      <button><Link to={'/biografia'}>Biografia</Link></button>
    </div>
  )
}

export default Home
