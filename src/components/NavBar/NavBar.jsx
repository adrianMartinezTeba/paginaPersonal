import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { PersonContext } from '../../context/PersonContext/PersonState';
import './NavBar.scss'
import Yo from '../../assets/imagenes/yo.jpeg'

const NavBar = () => {
  const { updatePositionProyectos, updatePositionHome, updatePositionHall } = useContext(PersonContext);
  const handlePosition = () => {
    updatePositionHome({ x: -20 })
    updatePositionProyectos({ x:5 })
    updatePositionHall({ x:0 })
  }
  return (
      <div className='navBar-container'>
          <img className='img-pag' src={Yo} alt="yo en la albufera de valencia" />
          <Link className='btn-navBar' onClick={handlePosition} to={'/home'}>Street</Link>
          <Link  className='btn-navBar' onClick={handlePosition} to={'/hall'}>Hall</Link>
          <Link  className='btn-navBar' onClick={handlePosition}  to={'/proyectos'}>My Projects</Link>
          <Link className='btn-navBar' onClick={handlePosition} to={'/biografia'}>Currículum Vitae</Link>
      </div>

  );
}

export default NavBar;