import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import './Home.scss';
import Person from '../Person/Person';
import { PersonContext } from '../../context/PersonContext/PersonState';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
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
      <NavBar/>
      {showInfoBox && (
        <div className="info-box">
          <h2>Información Importante</h2>
          <p>Bienvenido a mi página de inicio</p>
          <button onClick={handleHideInfoBox}>Cerrar</button>
        </div>
      )}
        <div className="home-sup">
          <div className="proy-div">
          
            <div className="proy-home-container">
              <div className="cartel-proy">Exposition</div>
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
        <Footer/>
    </div>
  );
};

export default Home;
