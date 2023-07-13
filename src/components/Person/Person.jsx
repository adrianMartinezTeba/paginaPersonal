import React, { useContext, useEffect, useRef, useState } from 'react';
import './Person.scss';
import { PersonContext } from '../../context/PersonContext/PersonState';

const Person = () => {
  const { positionHome, positionProyectos, positionHall, updatePositionProyectos, updatePositionHome, updatePositionHall } = useContext(PersonContext);
  const [andarIzq, setAndarIzq] = useState(false);
  const [andarAnimation, setAndarAnimation] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'a') {
        setAndarIzq(true);
        setAndarAnimation(true);
        moveLeft();
      } else if (event.key === 'd') {
        setAndarAnimation(true);
        setAndarIzq(false);
        moveRight();
      }
    };

    const handleKeyUp = (event) => {
      setAndarAnimation(false);
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [positionHall, positionHome, positionProyectos]);

  const scrollBySmooth = (scrollOffset, duration) => {
    const start = window.scrollX;
    const startTime = performance.now();

    const animateScroll = (timestamp) => {
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const scrollAmount = start + scrollOffset * progress;

      window.scrollTo(scrollAmount, 0);

      if (progress < 1) {
        window.requestAnimationFrame(animateScroll);
      }
    };

    window.requestAnimationFrame(animateScroll);
  };

  const moveLeft = () => {
    setAndarAnimation(true);
    updatePositionHome({ ...positionHome, x: positionHome.x - 5 });
    updatePositionProyectos({ ...positionProyectos, x: positionProyectos.x - 5 });
    updatePositionHall({ ...positionHall, x: positionHall.x - 5 });
    scrollBySmooth(-120, 300); // Desplazamiento suave hacia la izquierda durante 1 segundo
  };

  const moveRight = () => {
    setAndarAnimation(true);
    updatePositionHome({ ...positionHome, x: positionHome.x + 5 });
    updatePositionProyectos({ ...positionProyectos, x: positionProyectos.x + 5 });
    updatePositionHall({ ...positionHall, x: positionHall.x + 5 });
    scrollBySmooth(120, 300); // Desplazamiento suave hacia la derecha durante 1 segundo
  };

  return (
    <div
      className={`person-container ${andarAnimation ? 'andar-animation' : ''}`}
      ref={elementRef}
    >
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
