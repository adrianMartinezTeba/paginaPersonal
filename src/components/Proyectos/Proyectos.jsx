import React, { useContext, useEffect, useRef, useState } from 'react';
import './Proyectos.scss';
import { useNavigate } from "react-router-dom";
import Person from '../Person/Person';
import { PersonContext } from '../../context/PersonContext/PersonState';
import imagenCuadro from '../../assets/imagenes/imagenCuadro.jpg';
import yo from '../../assets/imagenes/yo.jpeg';

const Proyectos = () => {
  const navigate = useNavigate();
  const { positionProyectos, updatePositionHome, updatePositionHall } = useContext(PersonContext);
  const [activeProjectIndex, setActiveProjectIndex] = useState(null);

  const projects = [
    {
      img: imagenCuadro,
      urlProyecto: 'https://portfolio-adrianmartinezteba.vercel.app/',
      gitHubBackend: 'Sin backend.',
      gitHubFrontend: 'https://github.com/adrianMartinezTeba/paginaPersonal',
      nombre: 'Portfolio',
      descripcion: 'Mi portfolio personal.',
      tecnologías: ['React.js, framer-motion, JavaScript(consulta su correspondiente github para más información).'],
      estado: 'Acabado.'
    },
    {
      img: yo,
      urlProyecto: 'Próximamente.',
      gitHubBackend: 'https://github.com/adrianMartinezTeba/Back-rutinAdri',
      gitHubFrontend: 'https://github.com/adrianMartinezTeba/frontend-rutinAdri',
      nombre: 'RutinAdri',
      descripcion: 'Una red social donde crear tus rutinas y ver las de los demás.',
      tecnologías: ['React.js,MongoDB,JavaScript(consulta sus correspondientes githubs para más información).'],
      estado: 'En desarrollo.'
    },
    {
      img: yo,
      urlProyecto: 'Próximamente.',
      gitHubBackend: 'https://github.com/adrianMartinezTeba/backend-instAdri',
      gitHubFrontend: 'https://github.com/adrianMartinezTeba/frontend-instAdri',
      nombre: 'InstAdri',
      descripcion: 'Una red social donde subir tus fotos y ver las de los usuarios que sigues.',
      tecnologías: ['React.js,MongoDB,JavaScript(consulta sus correspondientes githubs para más información).'],
      estado: 'En desarrollo.'
    },
    // Add more project objects here
  ];

  const personDivRef = useRef(null);

  useEffect(() => {
    if (positionProyectos.x === 0) {
      setTimeout(() => {
        updatePositionHome({ x: -20 });
        updatePositionHall({ x: 0 });
        navigate('/hall');
      }, 300);
    }
    window.scrollTo(personDivRef);
  }, [positionProyectos]);

  return (
    <div className='proyectos-container'>
      <div className='pas-sup'>
        <div className="pta-hall-container">
          <div className="cartel-hall"><p>Hall</p></div>
          <div className="puerta-hall"></div>
        </div>
        <div className='cuadros-container'>
          {projects.map((project, index) => (
            <div key={index} className={activeProjectIndex === index ? 'infoExtended' : 'info'}>
              <div className='inf-sup'>
                <p>{project.nombre}</p>
                <button className='infor-btn' onClick={() => setActiveProjectIndex(activeProjectIndex === index ? null : index)}>
                  {activeProjectIndex === index ? '-' : '+'}
                </button>
              </div>
              {activeProjectIndex === index && (
                <ul>
                  <li>Descripción: {project.descripcion}</li>
                  {project.gitHubBackend === 'Sin backend.' ? (<li>Backend: {project.gitHubBackend}</li>) : (<li>Backend: <a href={project.gitHubBackend} target='_blank' rel='noopener noreferrer'> {project.gitHubBackend}</a></li>)}
                  <li>Frontend: <a href={project.gitHubFrontend} target='_blank' rel='noopener noreferrer'> {project.gitHubFrontend}</a></li>
                  {project.urlProyecto === 'Próximamente.' ? (<li>Url del proyecto: {project.urlProyecto}</li>) : (<li>Url del proyecto: <a href={project.urlProyecto} target='_blank' rel='noopener noreferrer'> {project.urlProyecto}</a></li>)}
                  <li>Principales tecnologías: {project.tecnologías}</li>
                  <li>Estado del proyecto: {project.estado}</li>
                </ul>
              )}
              <div className="cuadro">
                <div className="marco">
                  <img src={project.img} alt="proyecto" className='proyecto-imgInd' width={'150px'} height={'150px'} />
                </div>
              </div>
            </div>
          ))}
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
