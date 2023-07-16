import React, { useState, useEffect, useContext } from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import './Biografia.scss';
import { useNavigate } from "react-router-dom";
import { PersonContext } from '../../context/PersonContext/PersonState';

const Biografia = () => {
  const { updatePositionHall } = useContext(PersonContext);
  const navigate=useNavigate()
  const headerTexts = [
    'Experiencia Laboral',
    'Educación',
    'Habilidades Técnicas',
    // Agrega aquí los demás encabezados que desees animar
  ];

  const [headers, setHeaders] = useState([]); // Estado para almacenar los encabezados con sus estados de animación
  const [expandedHeaders, setExpandedHeaders] = useState([]); // Estado para controlar los encabezados expandidos


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
      }, 200); // Tiempo entre la aparición de cada letra (ajusta el intervalo según tu preferencia)

      return intervalId;
    });

    return () => {
      // Limpia todos los intervalos cuando el componente se desmonta
      headerIntervals.forEach((intervalId) => clearInterval(intervalId));
    };
  }, []); // El efecto solo se ejecutará en el montaje del componente

  // Función para manejar el clic en el botón para desplegar la información de un encabezado
  const handleToggleContent = (index) => {
    setExpandedHeaders((prevExpandedHeaders) => {
      if (prevExpandedHeaders.includes(index)) {
        // Si el encabezado ya está expandido, lo eliminamos del array
        return prevExpandedHeaders.filter((headerIndex) => headerIndex !== index);
      } else {
        // Si el encabezado no está expandido, lo agregamos al array
        return [...prevExpandedHeaders, index];
      }
    });
  };
const handleNavToHall = () =>{
  navigate('/hall')
  updatePositionHall({x:0})
}

  return (
    <div className='bio-prinpipalDiv'>
      {/* <NavBar /> */}
      <div className='bio-container'>
        {headers.map((header, index) => (
          <section key={index}>
            <h3>
              {header.text}
              <button className='btn-expandir' onClick={() => handleToggleContent(index)}>
                {expandedHeaders.includes(index) ? '-' : '+'}
              </button>
            </h3>
            {expandedHeaders.includes(index) && ( // Mostrar el contenido solo si el encabezado está expandido
              <ul>
                {header.fullText === 'Experiencia Laboral' && (
                  <ul>
                    <li>
                      <h4>ServiBal</h4>
                      <p>2019/09 - 2019/12</p>
                      <p>Mozo de almacén.</p>
                    </li>
                    <li>
                      <h4>Domino's Pizza</h4>
                      <p>2020/02 - 2022/12</p>
                      <p>Repartidor,camarero,cocinero y responsable de turno.</p>
                    </li>
                    <li>
                      <h4>Federación de Fútbol de la Comunidad Valenciana</h4>
                      <p>2021/04 - Actualidad</p>
                      <p>Árbitro de fútbol</p>
                    </li>
                  </ul>
                )}
                {header.fullText === 'Educación' && (
                  <ul>
                    <li>
                      <h4>Bachillerato</h4>
                      <p>La Purísima(Torrent)</p>
                      <p>Año de graduación:2015</p>
                      <li>
                      <h4>Bootcamp Full Stack Web Developer</h4>
                      <p>The Bridge by EDEM</p>
                      <p>Año de graduación:2023/06</p>
                      </li>
                    </li>
                  </ul>

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
      {/* <Footer /> */}
    </div>
  );
};

export default Biografia;
