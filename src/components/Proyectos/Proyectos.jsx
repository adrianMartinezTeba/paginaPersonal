import React, { useContext, useEffect, useRef, useState } from 'react';
import './Proyectos.scss';
import { useNavigate } from "react-router-dom";
import Person from '../Person/Person';
import { PersonContext } from '../../context/PersonContext/PersonState';
import imagenCuadro from '../../assets/imagenes/imagenCuadro.jpg'
const Proyectos = () => {
  const navigate = useNavigate()
  const { positionProyectos, updatePositionHome, updatePositionHall } = useContext(PersonContext);
  const [info, setInfo] = useState(false)
  const paginasWeb =
  {
    img: imagenCuadro,
    urlProyecto: 'https://portfolio-adrianmartinezteba.vercel.app/',
    gitHubBackend: 'Sin backend',
    gitHubFrontend: 'https://github.com/adrianMartinezTeba/paginaPersonal',
    nombre: 'Portfolio',
    descripcion: 'Mi portfolio personal',
    tecnologías: ['React.js, framer-motion, node.js, SASS, HTML, CSS, JavaScript']
  }
  const personDivRef = useRef(null);
  useEffect(() => {
    if (positionProyectos.x === 0) {
      setTimeout(() => {
        updatePositionHome({ x: -20 })
        updatePositionHall({ x: 0 })
        navigate('/hall')
      }, 300);
    }
    window.scrollTo(personDivRef)
  }, [positionProyectos])
  const handdleInfo = () => {
    if (info) {
      setInfo(false)
    } else { setInfo(true) }
  }
  useEffect(() => {

  }, [info])
  return (
    <div className='proyectos-container'>
      <div className='pas-sup'>
        <div className="pta-hall-container">
          <div className="cartel-hall"><p>Hall</p></div>
          <div className="puerta-hall"></div>
        </div>
        <div className='cuadros-container'>

          <div className={info ? 'infoExtended' : 'info'}>
            <div className='inf-sup'><p>{paginasWeb.nombre}</p>
              <button className='infor-btn' onClick={handdleInfo}>
                {info ? '-' : '+'}
              </button>
            </div>
            {info && <ul>
              <li>Descripción:{paginasWeb.descripcion}</li>
              <li>Backend: {paginasWeb.gitHubBackend}</li>
              <li>Frontend: <a href='https://github.com/adrianMartinezTeba/paginaPersonal' target='blank'>{paginasWeb.gitHubFrontend}</a></li>
              <li>Url del proyecto:<a href="https://portfolio-adrianmartinezteba.vercel.app/" target='blank'> {paginasWeb.urlProyecto}</a></li>
              <li>Tecnologías: {paginasWeb.tecnologías}</li>
            </ul>}
          </div>
          <div className="cuadro">
            <div className="marco">
              <img src={paginasWeb.img} alt="proyecto" className='proyecto-imgInd' />
            </div>
          </div>

        </div>
        <div ref={personDivRef} className='person-div' style={{ '--position-x': positionProyectos.x }}>
          <Person />
        </div>
      </div>
      <div className="pas-inf"></div>

    </div>

  );
};

export default Proyectos;
