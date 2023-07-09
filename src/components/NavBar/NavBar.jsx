import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { PersonContext } from '../../context/PersonContext/PersonState';

const NavBar = () => {
    const { updatePositionProyectos, updatePositionHome,updatePositionHall} = useContext(PersonContext);
    const handlePosition = () =>{
        updatePositionHome({x:0})
        updatePositionProyectos({x:1})
        updatePositionHall({x:1})
    }
  return (
    <div>
      <div className='navBar-container'>
    <button onClick={handlePosition}>
        <Link to={'/'}>Home</Link>
    </button>
    <button onClick={handlePosition}>
    <Link to={'/hall'}>Hall</Link>
    </button>
    <button onClick={handlePosition}>
    <Link to={'/proyectos'}>My Projects</Link>
    </button>
    <button onClick={handlePosition}>
    <Link to={'/biografia'}>About me</Link>
    </button>
      </div>
    </div>
  );
}

export default NavBar;