import React, { useContext } from 'react'
import Person from '../Person/Person'
import { PersonContext } from '../../context/PersonContext/PersonState';
import NavBar from '../NavBar/NavBar';

const Hall = () => {
    const { positionHall, updatePositionHall } = useContext(PersonContext);
    return (
        <div>
            <div className='hall-container'>
                <NavBar />
                <div className='hall-sup'>
                    
                    <div className='divPerson-hall' style={{ '--position-x': positionHall.x }}>
                        <Person />
                    </div>
                    <div className="hall-inf">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hall
