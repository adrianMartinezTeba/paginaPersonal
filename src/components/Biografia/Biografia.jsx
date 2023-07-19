import React, { useState, useEffect, useContext } from 'react';
import { motion } from "framer-motion"
import './Biografia.scss';
import { PersonContext } from '../../context/PersonContext/PersonState';

const Biografia = () => {
  const { updatePositionHall } = useContext(PersonContext);
  const secciones = [
    'Experiencia Laboral',
    'Educación',
    'Proyectos',
    'Idiomas',
    'Certificaciones',
    'Habilidades',
    'Sobre mí'
    // Agrega aquí los demás encabezados que desees animar
  ];
  const expLabContentText = [
    {
      empresa: 'ServiBal',
      fecha: '2019/09 - 2019/12',
      puesto: 'Mozo de almacén.'
    },
    {
      empresa: "Domino's Pizza",
      fecha: '2020/02 - 2022/12',
      puesto: 'Repartidor,camarero,cocinero y responsable de turno.'
    },
    {
      empresa: 'Federación de Fútbol de la Comunidad Valenciana',
      fecha: '2021/04 - Actualidad',
      puesto: 'Árbitro de fútbol.'
    }
  ]
  const eduContentText = [
    {
      titulo: 'Bachillerato',
      centro: 'La Purísima(Torrent)',
      añoGraduacion: 'Año de graduación:2015'
    },
    {
      titulo: 'Bootcamp Full Stack Web Developer',
      centro: 'The Bridge by EDEM',
      añoGraduacion: 'Año de graduación:2023/06'
    },
  ]
  const proyectos = [
    {
      titulo: 'Proyecto 1',
      descripcion: 'Desarrollo de una aplicación web para gestionar tareas.',
      tecnologias: 'React, Node.js, MongoDB',
    },
    {
      titulo: 'Proyecto 2',
      descripcion: 'Aplicación móvil para rastrear hábitos de salud y bienestar.',
      tecnologias: 'React Native, Firebase',
    },
  ];

  const idiomas = [
    {
      idioma: 'Inglés',
      nivelOral: 'Medio-bajo(estudiando y mejorando actualmente)',
      nivelLectura: 'Alto',
    },
    {
      idioma: 'Español',
      nivelOral: 'Nativo',
      nivelLectura: 'Nativo',
    },
  ];

  const certificaciones = [
    {
      titulo: 'HTML',
      logo: '',
      entidad: 'The Bridge',
      fecha: '2023',
    },
    {
      titulo: 'CSS',
      logo: '',
      entidad: 'The Bridge',
      fecha: '2023',
    },
    {
      titulo: 'Web Dev Fundamentals',
      logo: '',
      entidad: 'The Bridge',
      fecha: '2023',
    },
    {
      titulo: 'JavaScript',
      logo: '',
      entidad: 'The Bridge',
      fecha: '2023',
    },
    {
      titulo: 'ES6',
      logo: '',
      entidad: 'The Bridge',
      fecha: '2023',
    },
    {
      titulo: 'SQL',
      logo: '',
      entidad: 'The Bridge',
      fecha: '2023',
    },
    {
      titulo: 'Node.js',
      logo: '',
      entidad: 'The Bridge',
      fecha: '2023',
    },
    {
      titulo: 'Express.js',
      logo: '',
      entidad: 'The Bridge',
      fecha: '2023',
    },
    {
      titulo: 'MondgoDB',
      logo: '',
      entidad: 'The Bridge',
      fecha: '2023',
    },
    {
      titulo: 'Backend development',
      logo: '',
      entidad: 'The Bridge',
      fecha: '2023',
    },
    {
      titulo: 'React',
      logo: '',
      entidad: 'The Bridge',
      fecha: '2023',
    },
    {
      titulo: 'Object Oriented Programming',
      logo: '',
      entidad: 'The Bridge',
      fecha: '2023',
    },
    {
      titulo: 'Jenkins',
      logo: '',
      entidad: 'The Bridge',
      fecha: '2023',
    },
    {
      titulo: 'GitHub',
      logo: '',
      entidad: 'The Bridge',
      fecha: '2023',
    },
    {
      titulo: 'Frontend development',
      logo: '',
      entidad: 'The Bridge',
      fecha: '2023',
    },
    {
      titulo: 'Docker',
      logo: '',
      entidad: 'The Bridge',
      fecha: '2023',
    },
    {
      titulo: 'DevOps',
      logo: '',
      entidad: 'The Bridge',
      fecha: '2023',
    },
  ];
  const habilidades = [
    { nombre: 'Creatividad 75%', valor: 75 },
    { nombre: 'Trabajo en equipo 80%', valor: 90 },
    { nombre: 'Comunicación 100%', valor: 100 },
    { nombre: 'Manejo de estrés 82%', valor: 82 },
    { nombre: 'Esfuerzo 100%', valor: 100 },
  ];
  const [chartData, setChartData] = useState(habilidades);
  const [seccionActiva, setSeccionActiva] = useState(null);

  const handleToggleContent = (index) => {
    setSeccionActiva((prevSeccion) => (prevSeccion === index ? null : index));
  };

  return (
    <div className='bio-container'>
      <div className='navBio'>
        {secciones.map((word, index) => (
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0, boxShadow: '0 0 8px 0 rgb(124, 113, 113), 0 0 20px 0 rgba(255, 254, 254, 0.86)', transition: { duration: 1.5 - index * 0.2 } }}
            whileHover={{ scale: 1.1, cursor: 'pointer', transition: { duration: 0.3 } }} // Duración de la animación de escala al hacer hover (0.3 segundos)
            whileTap={{ scale: 0.9, transition: { duration: 0.1 } }} // Duración de la animación de escala al hacer tap (0.3 segundos)
            className={`nav-item ${seccionActiva === index ? 'active' : ''}`}
            key={index}
            onClick={() => handleToggleContent(index)}
          >
            {word}
          </motion.div>
        ))}
      </div>

      {/* Contenido de las secciones */}
      <div className='contenidoCV'>
        {seccionActiva === 0 && (
          <motion.div initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }} className='infCV'>
            <ul>
              {expLabContentText.map((trabajo, index) => (
                <li key={index}>
                  <h2>Empresa: {trabajo.empresa}</h2>
                  <p>Fecha inicio y finalización: {trabajo.fecha}</p>
                  <p>Puesto: {trabajo.puesto}</p>
                </li>
              ))}
            </ul>
          </motion.div>
        )}

        {seccionActiva === 1 && (
          <motion.div initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }} className='infCV'>
            <ul>
              {eduContentText.map((titulo, index) => (
                <li key={index}>
                  <h2>{titulo.titulo}</h2>
                  <p>Centro: {titulo.centro}</p>
                  <p>{titulo.añoGraduacion}</p>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
        {seccionActiva === 2 && (
          <motion.div initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }} className='infCV'>
            <ul>
              {proyectos.map((proy, index) => (
                <li key={index}>
                  <h2>{proy.titulo}</h2>
                  <p>Descripción:{proy.descripcion}</p>
                  <p>Tecnologías:{proy.tecnologias}</p>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
        {seccionActiva === 3 && (
          <motion.div initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }} className='infCV'>
            <ul>
              {idiomas.map((idioma, index) => (
                <li key={index}>
                  <h2>{idioma.idioma}</h2>
                  <p>Nivel lectura: {idioma.nivelLectura}</p>
                  <p>Nivel oral: {idioma.nivelOral}</p>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
        {seccionActiva === 4 && (
          <motion.div initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }} className='infCV-hor'>
            <ul>
              {certificaciones.map((cer, index) => (
                <li key={index}>
                  <h2>{cer.titulo}</h2>
                  <p>Institución: {cer.entidad}</p>
                  <p>Fecha:{cer.fecha}</p>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
              {seccionActiva === 5 && (
         <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ duration: 1.5 }}
         className='infCV'
       >
         <div className='chart-container'>
           {chartData.map((habilidad, index) => (
             <motion.div
               key={index}
               className='bar-container'
               initial={{ width: 0 }}
               animate={{ width: `${habilidad.valor}%` }}
               transition={{ duration: 1, delay: index * 0.2 }}
             >
               <div className='bar' >
               <motion.p initial={{opacity:0}} animate={{opacity:1}}  transition={{ duration: 1, delay: index * 0.4 }}className='label'>{habilidad.nombre}</motion.p>
               </div>
             </motion.div>
           ))}
         </div>
       </motion.div>
        )}
              {seccionActiva === 6 && (
          <motion.div initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }} className='infCV'>
            <ul>
              {certificaciones.map((cer, index) => (
                <li key={index}>
                  <h2>{cer.titulo}</h2>
                  <p>Institución: {cer.entidad}</p>
                  <p>Fecha:{cer.fecha}</p>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Biografia;