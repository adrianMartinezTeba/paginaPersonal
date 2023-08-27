// RedirectComponent.jsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const RedirectComponent = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // const handleResize = () => {
      // const isMobile = window.innerWidth < 768; // Puedes ajustar el ancho de pantalla para determinar qué consideras "móvil"
    //   if (isMobile) {
    //     navigate('/biografia');
    //   }else{
    //     navigate('/home')
    //   }
    // };

    // handleResize();
    // window.addEventListener('resize', handleResize);

    // return () => window.removeEventListener('resize', handleResize);
  }, []);

  return null; // No renderizamos nada, ya que esta es solo una redirección antes de la renderización real.
};

export default RedirectComponent;
