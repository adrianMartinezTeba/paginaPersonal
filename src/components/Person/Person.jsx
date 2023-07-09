import React, { useContext, useEffect, useState } from 'react';
import './Person.scss';
import { PersonContext } from '../../context/PersonContext/PersonState';


const Person = () => {
  const { positionHome, positionProyectos,updatePositionProyectos,updatePositionHome,timbre,setTimbre } = useContext(PersonContext);
const [andarIzq,setAndarIzq] = useState(false)
const [andarAnimation, setAndarAnimation] = useState(false);
useEffect(() => {
  const handleKeyDown =  (event) => {
    if (event.key === 'a') {
      setAndarIzq(true);
      setAndarAnimation(true)
      moveLeft();
    } else if (event.key === 'd') {
      setAndarAnimation(true)
      setAndarIzq(false);
      moveRight();
    }
  };
  const handleKeyUp = (event) => {
    setAndarAnimation(false)
    if (event.key === 'a' || timbre==='false') {
    setAndarAnimation(false)
    
    } else if (event.key === 'd' || timbre==='false') {
  setAndarAnimation(false)

    }
  };
if (timbre==='true') {
  setAndarAnimation(true)
 setAndarIzq(true)
}
  window.addEventListener('keydown', handleKeyDown);
  window.addEventListener('keyup', handleKeyUp);
  return () => {
    window.removeEventListener('keydown', handleKeyDown);
    window.removeEventListener('keyup', handleKeyUp);
    };
  }, [positionHome,positionProyectos,andarIzq,andarAnimation,timbre]);

  const moveLeft = () => {
    setAndarAnimation(true)
    updatePositionHome({ ...positionHome, x: positionHome.x - 5});
    // setAndarAnimation(false)
    updatePositionProyectos({ ...positionProyectos, x: positionProyectos.x - 5 });
    window.scrollBy(-10, 0); // Desplaza la ventana hacia la izquierda
  };
  
  const moveRight = () => {
    setAndarAnimation(true)
    updatePositionHome({ ...positionHome, x: positionHome.x + 5});
    // setAndarAnimation(false)
    updatePositionProyectos({ ...positionProyectos, x:positionProyectos.x +5 });
    window.scrollBy(10, 0); // Desplaza la ventana hacia la derecha
  };

  return (
    <div className={`person-container ${andarAnimation ? 'andar-animation' : ''}`}>
      <div className='cabeza-container'>
        <div className={`cabeza-sup ${andarIzq ? 'andar-izq' : ''}`}>
          <div className='gorra1'></div>
          <div className={`gorra2 ${andarIzq ? 'andar-izq' : ''}`}><div className='gorra-name'>FULL-STACK DEVELOPER</div>
            {/* <p>FULL-STACK DEVELOPER</p> */}
          </div>
        </div>
        <div className={`cabeza-inf ${andarIzq ? 'andar-izq' : ''}`}>
          <div className="ceja"></div>
          <div className={`ojo ${andarIzq ? 'andar-izq' : ''}`}>
            <div className="pupila"></div>
          </div>
          <div className={`nariz ${andarIzq ? 'andar-izq' : ''}`}></div>
          <div className={`boca ${andarIzq ? 'andar-izq' : ''}`}></div>
        </div>
      </div>
      <div className="cuello"></div>
      <div className='tronco-container'>
       
        <div className='brazo-izq'>
          <div className="manga-izq"></div>
          <div className="bi-sup"></div>
          <div className="codo-izq"></div>
          <div className="bi-inf">
          <div className="antebrazo-izq"></div>
          <div className="mano-izq">
            <div className="dedo"></div>
            <div className="dedo"></div>
            <div className="dedo"></div>
            <div className="dedo"></div>
          </div>
          </div>
        </div>
        <div className='torso'></div>
        <div className='brazo-der'>
          <div className="manga-der"></div>
          <div className="bd-sup"></div>
          <div className="codo-der"></div>
          <div className="bd-inf">
          <div className="antebrazo-der"></div>
          <div className="mano-der">
            <div className="dedo"></div>
            <div className="dedo"></div>
            <div className="dedo"></div>
            <div className="dedo"></div>
          </div>
          </div>
        </div>
      </div>
      <div className='inferior-container'>
        <div className={`pierna-izq ${andarIzq ? 'andar-izq' : ''}`}>
          <div className="masa-izq"></div>
            <div className={`zapato-izq ${andarIzq ? 'andar-izq' : ''}`}>
          <div className='cordones'>
              <div className="cordon"></div>
              <div className="cordon"></div>
              <div className="cordon"></div>
            </div>
          </div>
        </div>
        <div className={`pierna-der ${andarIzq ? 'andar-izq' : ''}`}>
          <div className="masa-der"></div>
          <div className={`zapato-der ${andarIzq ? 'andar-izq' : ''}`}>
            <div className='cordones'>
              <div className="cordon"></div>
              <div className="cordon"></div>
              <div className="cordon"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Person
