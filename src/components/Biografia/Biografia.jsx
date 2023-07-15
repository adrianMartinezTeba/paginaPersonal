import React, { useState, useEffect } from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import './Biografia.scss';

const Biografia = () => {
  const headerTexts = [
    'Experiencia Laboral',
    'Educación',
    'Habilidades Técnicas',
    // Agrega aquí los demás encabezados que desees animar
  ];

  const [headers, setHeaders] = useState([]); // Estado para almacenar los encabezados con sus estados de animación
  const [expandedHeader, setExpandedHeader] = useState(null); // Estado para controlar el encabezado expandido

  useEffect(() => {
    // Función para mostrar la siguiente letra del encabezado
    const showNextLetter = (index, intervalId) => {
      setHeaders((prevHeaders) => {
        const updatedHeaders = [...prevHeaders];
        const header = updatedHeaders[index];

        if (header.text.length < header.fullText.length) {
          header.text = header.fullText.slice(0, header.text.length + 1);
        } else {
          clearInterval(intervalId); // Si se han mostrado todas las letras, se limpia el intervalo
        }

        return updatedHeaders;
      });
    };

    // Generar los estados iniciales para cada encabezado
    const initialHeaders = headerTexts.map((text) => ({
      text: '',
      fullText: text,
    }));

    setHeaders(initialHeaders);

    // Configurar el intervalo para cada encabezado
    const headerIntervals = initialHeaders.map((header, index) => {
      const intervalId = setInterval(() => {
        showNextLetter(index, intervalId);
      }, 100); // Tiempo entre la aparición de cada letra (ajusta el intervalo según tu preferencia)

      return intervalId;
    });

    return () => {
      // Limpia todos los intervalos cuando el componente se desmonta
      headerIntervals.forEach((intervalId) => clearInterval(intervalId));
    };
  }, []); // El efecto solo se ejecutará en el montaje del componente

  // Función para manejar el clic en el botón para desplegar la información de un encabezado
  const handleToggleContent = (index) => {
    setExpandedHeader((prevExpandedHeader) => (prevExpandedHeader === index ? null : index));
  };

  return (
    <div>
      <NavBar />
      <div className='bio-container'>
        {headers.map((header, index) => (
          <section key={index}>
            <h3>
              {header.text}
              <button onClick={() => handleToggleContent(index)}>
                {expandedHeader === index ? '-' : '+'}
              </button>
            </h3>
            {expandedHeader === index && ( // Mostrar el contenido solo si el encabezado está expandido
              <ul>
                {header.fullText === 'Experiencia Laboral' && (
                  <li>
                    <h4>Nombre de la Compañía</h4>
                    <p>Fecha de inicio - Fecha de finalización</p>
                    <p>Descripción de las responsabilidades y logros en el puesto.</p>
                  </li>
                )}
                {header.fullText === 'Educación' && (
                  <li>
                    <h4>Título Académico</h4>
                    <p>Nombre de la Institución</p>
                    <p>Año de graduación</p>
                  </li>
                )}
                {header.fullText === 'Habilidades Técnicas' && (
                  <ul>
                    <li>Lenguajes de Programación</li>
                    <ul>
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>JavaScript</li>
                      <li>Python</li>
                    </ul>
                    <li>Tecnologías y Frameworks</li>
                    <ul>
                      <li>React</li>
                      <li>Angular</li>
                      <li>Node.js</li>
                      <li>Express.js</li>
                    </ul>
                  </ul>
                )}
                {/* Agregar aquí el contenido para los demás encabezados */}
              </ul>
            )}
          </section>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Biografia;
