import React, { createContext, useState } from 'react';

// Crear el contexto
const PersonContext = createContext();

// Crear el proveedor del contexto
const PersonProvider = ({ children }) => {
  const containerWidth = 800; // Ancho del contenedor padre
  const personWidth = 200; // Ancho del componente Person

  const maxPositionX =9// Límite derecho
  const minPositionX = 0; // Límite izquierdo

  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Definir función para actualizar la posición con límites
  const updatePosition = (newPosition) => {
    if (newPosition.x >= minPositionX && newPosition.x <= maxPositionX) {
      setPosition(newPosition);
    }
  };

  // Proporcionar el estado y las funciones a los componentes hijos
  return (
    <PersonContext.Provider value={{ position, updatePosition }}>
      {children}
    </PersonContext.Provider>
  );
};

export { PersonContext, PersonProvider };
