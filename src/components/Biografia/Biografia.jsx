import React from 'react'
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import './Biografia.scss'
const Biografia = () => {
  return (
    <div>
      <NavBar />
      <div className='bio-container'>
        <section>
          <h3>Experiencia Laboral</h3>
          <ul>
            <li>
              <h4>Nombre de la Compañía</h4>
              <p>Fecha de inicio - Fecha de finalización</p>
              <p>Descripción de las responsabilidades y logros en el puesto.</p>
            </li>
          </ul>
        </section>
        <section>
          <h3>Educación</h3>
          <ul>
            <li>
              <h4>Título Académico</h4>
              <p>Nombre de la Institución</p>
              <p>Año de graduación</p>
            </li>
          </ul>
        </section>
        <section>
          <h3>Habilidades Técnicas</h3>
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
        </section>
        <section>
          <h3>Habilidades Sociales</h3>
          <ul>
            <li>Comunicación efectiva</li>
            <li>Trabajo en equipo</li>
            <li>Resolución de problemas</li>
          </ul>
        </section>
        <section>
          <h3>Idiomas</h3>
          <ul>
            <li>Idioma 1 - Nivel de dominio</li>
          </ul>
        </section>
        <section>
          <h3>Proyectos Destacados</h3>
          <ul>
            <li>
              <h4>Nombre del Proyecto</h4>
              <p>Descripción del proyecto</p>
              <p>Tecnologías utilizadas</p>
            </li>
          </ul>
        </section>
      </div>

      <Footer />
    </div>
  )
}

export default Biografia
