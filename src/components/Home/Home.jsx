import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import './Home.scss';
import Person from '../Person/Person';
import { PersonContext } from '../../context/PersonContext/PersonState';
import VideoEj from '../../assets/video/preview.mp4'
const Home = () => {
  const { positionHome, updatePositionHall} = useContext(PersonContext);
  const [showInfoBox, setShowInfoBox] = useState(false);
const navigate = useNavigate()
useEffect(()=>{
  const isInfoBoxShown = sessionStorage.getItem('isInfoBoxShown');

  if (!isInfoBoxShown) {
    setShowInfoBox(true);
    sessionStorage.setItem('isInfoBoxShown', 'true');
  }
},[])
useEffect(()=>{
 
if (positionHome.x===20) {
  setTimeout(() => {
     navigate('/hall')
  }, 300);
}
updatePositionHall({x:0})
},[positionHome])
const handleHideInfoBox = () => {
  setShowInfoBox(false);
};

  return (
    <div className="home-container">
      {showInfoBox && (
        <div className="info-box">
          <h2>¡¡Información importante!!</h2>
          <p>Bienvenido a mi página portfolio,he querido hacer una página interactiva en la que puedes manejar un personaje(mover a la izquierda pulsa "A" y a la derecha "D") para moverte por la página y ver mi trabajos o puedes acceder a mi curriculum pinchando <span className='linkBio'>
            <Link  to={'/biografia'}>aquí.</Link>
          </span> Además puedes usar la barra de navegación por si se hace tedioso manejar el personaje y quieres ir al grano.</p>
          <p>Si quieres ir navegando por mi página con el personaje solo ves andando hasta las puertas para ir entrando a las "salas" correspondientes.Te dejo un video para que entiendas mejor como "pasear" por mi página.</p>
          <ul>
            <li>Street:Personaje en la calle.</li>
            <li>Hall:Donde elegir si ver mi curriculum o la exposicion de mis proyectos.</li>
            <li>Mis proyectos:Donde ver los proyectos en los que he trabajado.</li>
            <li>Currículum:Donde conocerme además de ver mis proyectos de una forma más convencional.</li>
          </ul>
            <video controls className='video-tut'>
              <source src={VideoEj}/>
            </video>
          <button className='btn-inf' onClick={handleHideInfoBox}>Cerrar</button>
        </div>
      )}
        <div className="home-sup">
          <div className="proy-div">
          
            <div className="proy-home-container">
              <div className="cartel-proy">Exposición</div>
              <div className="puerta-container">
                <div className="puerta">
                </div>
              </div>
            </div>
          </div>
          <div className='divPerson-home' style={{ '--position-x': positionHome.x }}>
          <Person />
            </div>
        </div>
        <div className="home-inf">
          <div className="acera"></div>
          <div className="carretera">
            <div className="raya-disc"></div>
            <div className="raya-disc"></div>
            <div className="raya-disc"></div>
            <div className="raya-disc"></div>
          </div>
        </div>
    </div>
  );
};

export default Home;
