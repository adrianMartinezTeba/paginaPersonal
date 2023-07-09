import React, { useContext, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Proyectos.scss';
import Person from '../Person/Person';
import { PersonContext } from '../../context/PersonContext/PersonState';
import NavBar from '../NavBar/NavBar';

const Proyectos = () => {
  const { positionProyectos, updatePositionProyectos } = useContext(PersonContext);
  const paginasWeb = [
    'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
    'https://st.depositphotos.com/1016440/2534/i/600/depositphotos_25344733-stock-photo-sunrise-at-the-beach.jpg',
    'https://i.blogs.es/ceda9c/dalle/450_1000.jpg'
  ];
  const personDivRef = useRef(null);

  const handleScroll = () => {
    personDivRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <div>
     <NavBar/>
      <div className='proyectos-container'>
        <div className='pas-sup'>
          <div className='cuadros-container'>
            {paginasWeb.map((pag) => (
              <div className="cuadro" key={pag}>
                <img src={pag} alt="proyecto" className='proyecto-imgInd' />
              </div>
            ))}
          </div>
          <div ref={personDivRef} className='person-div' style={{ '--position-x': positionProyectos.x }}>
          <Person />
          </div>
        </div>
        <div className="pas-inf"></div>
      </div>
      <button onClick={handleScroll}>Scroll</button>
    </div>
  );
};

export default Proyectos;
