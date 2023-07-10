import React, { useContext, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import './Home.scss';
import Person from '../Person/Person';
import { PersonContext } from '../../context/PersonContext/PersonState';
import NavBar from '../NavBar/NavBar';
const Home = () => {
  const { positionHome, updatePositionHall} = useContext(PersonContext);
const navigate = useNavigate()

useEffect(()=>{
if (positionHome.x===20) {
  setTimeout(() => {
     navigate('/hall')
  }, 300);
}
updatePositionHall({x:0})
},[positionHome])
  return (
    <div className="home-container">
      <NavBar/>
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
    </div>
  );
};

export default Home;
