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
    <div>
      <div className='navBar-container'>
      
          <img className='img-pag' src={Yo} alt="yo en la albufera de valencia" />
        <div  onClick={handlePosition}>
          <Link className='btn-navBar' to={'/'}>Home</Link>
        </div>
        <div onClick={handlePosition}>
          <Link  className='btn-navBar' to={'/hall'}>Hall</Link>
        </div>
        <div onClick={handlePosition}>
          <Link  className='btn-navBar'  to={'/proyectos'}>My Projects</Link>
        </div>
        <div  onClick={handlePosition}>
          <Link className='btn-navBar' to={'/biografia'}>About me</Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar;