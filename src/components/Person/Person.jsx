import React from 'react'
import './Person.scss'
const Person = () => {
  return (
    <div className='person-container'>
      <div className='cabeza-container'>
        <div className='cabeza-sup'>
          <div className='gorra1'></div>
          <div className="gorra2"><div className='gorra-name'>FULL-STACK DEVELOPER</div>
            {/* <p>FULL-STACK DEVELOPER</p> */}
          </div>
        </div>
        <div className='cabeza-inf'>
          <div className="ceja"></div>
          <div className="ojo">
            <div className="pupila"></div>
          </div>
          <div className="nariz"></div>
          <div className="boca"></div>
        </div>
      </div>
      <div className="cuello"></div>
      <div className='tronco-container'>
       
        <div className='brazo-izq'>
          <div className="manga-izq"></div>
          <div className="bi-sup"></div>
          <div className="codo-izq"></div>
          <div className="bi-inf"></div>
          <div className="mano-izq">
            <div className="dedo"></div>
            <div className="dedo"></div>
            <div className="dedo"></div>
            <div className="dedo"></div>
          </div>
        </div>
        <div className='torso'></div>
        <div className='brazo-der'>
          <div className="manga-der"></div>
          <div className="bd-sup"></div>
          <div className="codo-der"></div>
          <div className="bd-inf"></div>
          <div className="mano-der">
            <div className="dedo"></div>
            <div className="dedo"></div>
            <div className="dedo"></div>
            <div className="dedo"></div>
          </div>
        </div>
      </div>
      <div className='inferior-container'>
        <div className='pierna-izq'>
          <div className="masa-izq"></div>
            <div className='zapato-izq'>
          <div className='cordones'>
              <div className="cordon"></div>
              <div className="cordon"></div>
              <div className="cordon"></div>
            </div>
          </div>
        </div>
        <div className='pierna-der'>
          <div className="masa-der"></div>
          <div className='zapato-der'>
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
