import React from 'react'
import './Person.scss'
const Person = () => {
  return (
    <div className='person-container'>
      <div className='cabeza-container'>
        <div className='cabeza-sup'>
          <div className='gorra1'></div>
          <div className="gorra2"></div>
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
      <div className='torso-container'>
        <div className='cuerpo'></div>
        <div className='brazo-izq'></div>
        <div className='brazo-der'></div>
      </div>
      <div className='inferior-container'>
        <div>
          <div className='pierna-izq'></div>
          <div className='zapato-izq'></div>
        </div>
        <div>
          <div className='pierna-der'></div>
          <div className='zapato-der'></div>
        </div>
        <div className="tri"></div>
      </div>
    </div>
  )
}

export default Person
