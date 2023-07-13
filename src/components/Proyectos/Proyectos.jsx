import React, { useContext, useEffect, useRef } from 'react';
import './Proyectos.scss';
import { useNavigate } from "react-router-dom";
import Person from '../Person/Person';
import { PersonContext } from '../../context/PersonContext/PersonState';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';

const Proyectos = () => {
  const navigate = useNavigate()
  const { positionProyectos, updatePositionHome, updatePositionHall } = useContext(PersonContext);
  const paginasWeb = [
    'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
    'https://st.depositphotos.com/1016440/2534/i/600/depositphotos_25344733-stock-photo-sunrise-at-the-beach.jpg',
    'https://i.blogs.es/ceda9c/dalle/450_1000.jpg'
  ];
  const personDivRef = useRef(null);
useEffect(()=>{
if (positionProyectos.x===0) {
  setTimeout(() => {
    updatePositionHome({x:-20})
    updatePositionHall({x:0})
    navigate('/hall')
  }, 300);
}
window.scrollTo(personDivRef)
},[positionProyectos])

  return (
      <div className='proyectos-container'>
        <NavBar/>
        <div className='pas-sup'>
          <div className="pta-hall-container">
            <div className="cartel-hall"><p>Hall</p></div>
            <div className="puerta-hall"></div>
          </div>
          <div className='cuadros-container'>
            {paginasWeb.map((pag) => (
              <div className="cuadro" key={pag}>
                <div className="info">Info</div>
                <div className="marco">
                  <img src={pag} alt="proyecto" className='proyecto-imgInd' />
                  </div>
              </div>
            ))}
          </div>
          <div ref={personDivRef} className='person-div' style={{ '--position-x': positionProyectos.x }}>
          <Person />
          </div>
        </div>
        <div className="pas-inf"></div>
        <Footer/>
      </div>
    
    );
};

export default Proyectos;
