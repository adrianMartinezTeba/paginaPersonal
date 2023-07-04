import React from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';
import Person from '../Person/Person';
const Home = () => {
  return (
    <div className="home-container">
      <div>
        <div className="home-sup">
          <div className="proy-div">
            <Link to={'/proyectos'}>Proyectos</Link>
            <div className="proy-home-container">
              <div className="cartel-proy">Proyectos</div>
              <div className="puerta-container">
                <div className="puerta">
                  <div className="pta-izq"></div>
                  <div className="pta-der"></div>
                </div>
                <div className="timbre-container">
                  <div className="timbre"></div>
                </div>
              </div>
            </div>
          </div>
          <div className='divPerson-home'>
            <Person/>
            </div>
          <div className="bio-div">
            <Link to={'/biografia'}>Biografía</Link>
          </div>
        </div>
        <div className="home-inf"></div>
      </div>
    </div>
  );
};

export default Home;
