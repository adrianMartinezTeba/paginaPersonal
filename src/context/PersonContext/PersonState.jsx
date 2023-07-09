import React, { createContext, useState } from 'react';

// Crear el contexto
const PersonContext = createContext();

// Crear el proveedor del contexto
const PersonProvider = ({ children }) => {
  const minPositionXHome = -19; // Límite izquierdo
  const maxPositionXHome = 50; // Límite derecho
  const minPositionXProy = 1; // Límite izquierdo
  const maxPositionxProy = 52; // Límite derecho
  const minPositionXHall = 1; // Límite izquierdo
  const maxPositionxHall = 52; // Límite derecho

  const [positionHome, setPositionHome] = useState({ x: 0, y: 0 });
  const [positionProyectos, setPositionProyectos] = useState({ x: 0, y: 0 });
  const [positionHall, setPositionHall] = useState({ x: 0, y: 0 });
  const [timbre, setTimbre] = useState(false);

  // Definir función para actualizar la posición con límites para el contexto de Home
  const updatePositionHome = (newPosition) => {
    if (newPosition.x >= minPositionXHome && newPosition.x <= maxPositionXHome) {
      setPositionHome(newPosition);
    }
  };

  // Definir función para actualizar la posición con límites para el contexto de Proyectos
  const updatePositionProyectos = (newPosition) => {
    if (newPosition.x >= minPositionXProy && newPosition.x <= maxPositionxProy) {
      setPositionProyectos(newPosition);
    }
  };
  const updatePositionHall= (newPosition) => {
    if (newPosition.x >= minPositionXHall && newPosition.x <= maxPositionxHall) {
      setPositionHall(newPosition);
    }
  };
  const handleLLamarTimbre = () => {
    setTimbre(true)
    updatePositionHome({x:-15})
  };
  // Proporcionar el estado y las funciones a los componentes hijos
  return (
    <PersonContext.Provider
      value={{ positionHome,handleLLamarTimbre,timbre,setTimbre, positionProyectos,positionHall, updatePositionHome, updatePositionProyectos,setPositionHall }}
    >
      {children}
    </PersonContext.Provider>
  );
};

export { PersonContext, PersonProvider };
