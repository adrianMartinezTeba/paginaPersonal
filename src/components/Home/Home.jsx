import React, { useContext, useEffect } from 'react';
import { Link  } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import './Home.scss';
import Person from '../Person/Person';
import { PersonContext } from '../../context/PersonContext/PersonState';
import NavBar from '../NavBar/NavBar';
const Home = () => {
  const { positionHome, updatePositionHome,handleLLamarTimbre,timbre,setTimbre} = useContext(PersonContext);
const navigate = useNavigate()

useEffect(()=>{

  if (positionHome.x<=-15) {

  }
},[positionHome,timbre])
  return (
    <div className="home-container">
      <div>
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
        <div className="home-inf"></div>
      </div>
    </div>
  );
};

export default Home;
