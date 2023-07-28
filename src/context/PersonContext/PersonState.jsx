import React, { createContext, useState } from 'react';

// Crear el contexto
const PersonContext = createContext();

// Crear el proveedor del contexto
const PersonProvider = ({ children }) => {
  const minPositionXHome = -20; // Límite izquierdo
  const maxPositionXHome = 24; // Límite derecho
  const minPositionXProy = 0; // Límite izquierdo
  const maxPositionxProy = 45; // Límite derecho
  const minPositionXHall = -21; // Límite izquierdo
  const maxPositionxHall = 25; // Límite derecho

  const [positionHome, setPositionHome] = useState({ x: -20, y: 0 });
  const [positionProyectos, setPositionProyectos] = useState({ x: 5, y: 0 });
  const [positionHall, setPositionHall] = useState({ x: 0, y: 0 });

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

  // Proporcionar el estado y las funciones a los componentes hijos
  return (
    <PersonContext.Provider
      value={{ positionHome, positionProyectos,positionHall, updatePositionHome, updatePositionProyectos,updatePositionHall }}
    >
      {children}
    </PersonContext.Provider>
  );
};

export { PersonContext, PersonProvider };
