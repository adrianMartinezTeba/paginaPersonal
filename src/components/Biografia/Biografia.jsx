import React, { useState, useEffect, useContext } from 'react';
import { motion } from "framer-motion"
import './Biografia.scss';
const Biografia = () => {
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
  const proyectos = 
    {
      titulo: 'Portfolio',
      descripcion: 'Mi portfolio personal interactivo donde puedes conocerme.',
      url:'https://portfolio-adrianmartinezteba.vercel.app/',
      frontend:'https://github.com/adrianMartinezTeba/paginaPersonal',
      tecnologias: 'React, Node.js, Framer-motion,SASS,HTML,CSS',
    }
   

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

      entidad: 'The Bridge',
      fecha: '2023',
    },
    {
      titulo: 'CSS',

      entidad: 'The Bridge',
      fecha: '2023',
    },
    {
      titulo: 'Web Dev Fundamentals',

      entidad: 'The Bridge',
      fecha: '2023',
    },
    {
      titulo: 'JavaScript',

      entidad: 'The Bridge',
      fecha: '2023',
    },
    {
      titulo: 'ES6',

      entidad: 'The Bridge',
      fecha: '2023',
    },
    {
      titulo: 'SQL',

      entidad: 'The Bridge',
      fecha: '2023',
    },
    {
      titulo: 'Node.js',

      entidad: 'The Bridge',
      fecha: '2023',
    },
    {
      titulo: 'Express.js',

      entidad: 'The Bridge',
      fecha: '2023',
    },
    {
      titulo: 'MondgoDB',

      entidad: 'The Bridge',
      fecha: '2023',
    },
    {
      titulo: 'Backend development',

      entidad: 'The Bridge',
      fecha: '2023',
    },
    {
      titulo: 'React',

      entidad: 'The Bridge',
      fecha: '2023',
    },
    {
      titulo: 'Object Oriented Programming',

      entidad: 'The Bridge',
      fecha: '2023',
    },
    {
      titulo: 'Jenkins',

      entidad: 'The Bridge',
      fecha: '2023',
    },
    {
      titulo: 'GitHub',

      entidad: 'The Bridge',
      fecha: '2023',
    },
    {
      titulo: 'Frontend development',

      entidad: 'The Bridge',
      fecha: '2023',
    },
    {
      titulo: 'Docker',

      entidad: 'The Bridge',
      fecha: '2023',
    },
    {
      titulo: 'DevOps',

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
    <motion.div className='bio-container'>
      <div className='navBio'>
        {secciones.map((word, index) => (
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0, boxShadow: '0 0 8px 0 rgb(124, 113, 113), 0 0 20px 0 rgba(255, 254, 254, 0.86)', transition: { duration: 0.3 + index * 0.2 } }}
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
            
              {expLabContentText.map((trabajo, index) => (
                <div className='card-cont' key={index}>
                  <h2>Empresa: {trabajo.empresa}</h2>
                  <p>Fecha inicio y finalización: {trabajo.fecha}</p>
                  <p>Puesto: {trabajo.puesto}</p>
                </div>
              ))}
            
          </motion.div>
        )}

        {seccionActiva === 1 && (
          <motion.div initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }} className='infCV'>
            
              {eduContentText.map((titulo, index) => (
                <div className='card-cont' key={index}>
                  <h2>{titulo.titulo}</h2>
                  <p>Centro: {titulo.centro}</p>
                  <p>{titulo.añoGraduacion}</p>
                </div>
              ))}
       
          </motion.div>
        )}
        {seccionActiva === 2 && (
          <motion.div initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }} className='infCV'>
                <div className='card-cont'>
                  <h2>{proyectos.titulo}</h2>
                  <p>Descripción:{proyectos.descripcion}</p>
                  <p>GitHub Frontend: <a href="https://github.com/adrianMartinezTeba/paginaPersonal" target='blank'>{proyectos.frontend}</a></p>
                  <p>Url del proyecto: <a href="https://portfolio-adrianmartinezteba.vercel.app/">{proyectos.url}</a></p>
                  <p>Tecnologías:{proyectos.tecnologias}</p>
                </div>
          </motion.div>
        )}
        {seccionActiva === 3 && (
          <motion.div initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }} className='infCV'>
           
              {idiomas.map((idioma, index) => (
                <div className='card-cont' key={index}>
                  <h2>{idioma.idioma}</h2>
                  <p>Nivel lectura: {idioma.nivelLectura}</p>
                  <p>Nivel oral: {idioma.nivelOral}</p>
                </div>
              ))}
       
          </motion.div>
        )}
        {seccionActiva === 4 && (
          <motion.div initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }} className='infCV-hor'>
          
              {certificaciones.map((cer, index) => (
                <div className='card-cont' key={index}>
                  <h2>{cer.titulo}</h2>
                  <p>Institución: {cer.entidad}</p>
                  <p>Fecha:{cer.fecha}</p>
                </div>
              ))}
          
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
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: index * 0.4 }} className='label'>{habilidad.nombre}</motion.p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
        {seccionActiva === 6 && (
          <motion.div initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }} className='sobremi-container'>
            
             
              <div className='card-cont'>
                <h2>Residencia</h2>
                <p>Torrent,Valencia(España).</p>
              </div>
              <div className='card-cont'>
                <h2>Educación</h2>
                <p>Tanto la educación primaria como la  secundaria y el bachillerato, los cursé en  el colegio La Purísima (Torrent, Valencia). Una vez superada la selectividad, me decanté por el grado universitario en ADE (Administración y Dirección de Empresas). Tras cursar los dos primeros años, me di cuenta que no quería dedicarme profesionalmente a ello y decidí trabajar y enfocarme en las  en el maravilloso mundo de la programación y realicé un bootcamp proporcionado por el EDEM (Universidad) sobre Full Stack Web Developer con The Bridge.

                </p>
              </div>
              <div className='card-cont'>
                <h2>Hobbies</h2>
                <h4>Deportes</h4>
                <p>El fútbol ha sido mi pasión desde que era un niño. He practicado  este deporte durante 15 años y una vez finalizada mi etapa como jugador, decidí continuar como árbitro. Esta experiencia me ha enriquecido tanto a nivel personal como profesional, pues el manejo del estrés, la capacidad de concentración y la gestión emocional en situaciones de mucha presión las he mejorado significativamente gracias a este deporte. Sin embargo, no ha sido el único que he practicado, ya que el baloncesto y el ping pong (tenis de mesa) están muy presentes en mi vida.</p>
                <h4>Desarrollador</h4>
                <p>La programación me ha dado la oportunidad de considerar mi profesión como mi propio hobbie. Disfruto ampliando conocimientos y aprendiendo sobre nuevas tecnologías, lo que  me permite mejorar mis habilidades como desarrollador. Soy un hombre ambicioso y mis proyectos de futuro están enfocados a la creación de videojuegos. Para ello, continúo mi formación de manera autodidacta aprendiendo aspectos como Blender(Software gratuito dedicado especialmente al modelado, iluminación, renderizado, la animación y creación de gráficos tridimensionales),Unreal Engine(un motor de juego creado por la compañía Epic Games)y C++(para hacer más personalizado cualquier videojuego,además de lo útil que es aprender C++).</p>
              </div>
            
            
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default Biografia;