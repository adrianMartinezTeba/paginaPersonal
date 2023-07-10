import React, { useContext, useEffect } from 'react'
import Person from '../Person/Person'
import { useNavigate } from "react-router-dom";
import { PersonContext } from '../../context/PersonContext/PersonState';
import NavBar from '../NavBar/NavBar';
import './Hall.scss'

const Hall = () => {
    const navigate = useNavigate()
    const { positionHall,updatePositionHome,updatePositionProyectos } = useContext(PersonContext);
  useEffect(()=>{
    if (positionHall.x===-20) {   
    updatePositionProyectos({x:5})
      setTimeout(() => {
        navigate('/proyectos')
      }, 500);
    }else if (positionHall.x===25) {
        setTimeout(() => {
            navigate('/biografia')
          }, 500);
    }
    },[positionHall])
    return (
        <div>
            <div className='hall-container'>
                <NavBar/>
                <div className='hall-sup'>
                    <div className='pta-pro-container'>
                        <div className="cartel-proyectos">
                            <p>Proyectos</p>
                        </div>
                        <div className="puerta-projects"></div>
                    </div>
                    <div className='divPerson-hall' style={{ '--position-x': positionHall.x }}>
                        <Person />
                    </div>
                    <div className='pta-bio-container'>
                        <div className="cartel-bio">
                            <p>Biografia</p>
                        </div>
                        <div className="puerta-bio"></div>
                    </div>
                </div>
                    <div className="hall-inf"></div>
            </div>
        </div>
    )
}

export default Hall
