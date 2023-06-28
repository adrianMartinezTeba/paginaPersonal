import React from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';

const Home = () => {
  return (
    <div className="home-container">
      <div className="buttons-container">
        <button className="museo-button">
          <Link to={'/proyectos'}>
            <div className="museum-container">
              <div className="building">
                <div className="title-museum">My projects</div>
                <div className="entrance">
                  <div className="door"></div>
                </div>
                <div className="windows">
                  <div className="window"></div>
                  <div className="window"></div>
                  <div className="window"></div>
                </div>
              </div>
            </div>
          </Link>
        </button>
        <button className="biografia-button">
          <Link to={'/biografia'}>Biografía</Link>
        </button>
      </div>
      <div className="person"></div>
    </div>
  );
};

export default Home;
