# Portfolio

¡Bienvenido/a a mi página portfolio interactiva hecha con React.js! En esta página, puedes mover un personaje para explorar mis proyectos o conocer un poco más sobre mí.

## Tabla de contenidos

- [Descripción](#descripción)
- [Características](#características)
- [Tecnologías](#tecnologías)
- [Requisitos](#requisitos)
- [Instalación](#instalación)
- [Despliegue](#despliegue)
- [Contacto](#contacto)

## Descripción

Mi página portfolio es una página interactiva donde puedes moverte usando las teclas "A"(moverte izq) y "D"(moverte der)
```js
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'a') {
        setAndarIzq(true);
        setAndarAnimation(true);
        moveLeft();
      } else if (event.key === 'd') {
        setAndarAnimation(true);
        setAndarIzq(false);
        moveRight();
      }
    };

    const handleKeyUp = (event) => {
      setAndarAnimation(false);
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [positionHall, positionHome, positionProyectos]);
```
En ella puedes ir desde la calle hasta la exposición donde podrás entrar luego en mis proyectos(sala doonde verás mis proyectos como full stack developer)o a mi curriculum(donde podrás conocerme un poco a mí como ver mis certificaciones y aptitudes)
```js
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
```
La página es responsive asi que si la ves desde tú movil he heho que solo puedas acceder a la parte de mi curriculum con un componente puente para que si el ancho es menor de X te redirija automaticamente a '/biografia'(ruta de mi curriculum)
```js
// RedirectComponent.jsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const RedirectComponent = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 768; // Puedes ajustar el ancho de pantalla para determinar qué consideras "móvil"
      if (isMobile) {
        navigate('/biografia');
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [navigate]);

  return null; // No renderizamos nada, ya que esta es solo una redirección antes de la renderización real.
};

export default RedirectComponent;
```
Y he usado framer-motion una libreria para las animaciones de algunos componentes de mi curriculum aquí os dejo un trozo
```js
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
```

## Características

- Explora diferentes secciones: Puedes moverte desde la calle hasta la exposición, donde encontrarás dos secciones principales:
  - Proyectos: Aquí podrás ver mis proyectos como Full Stack Developer.
  - Curriculum: Conoce más sobre mí, incluyendo mis certificaciones y habilidades.

## Tecnologías

El proyecto ha sido desarrollado utilizando las siguientes tecnologías:

- React.js
- Framer Motion
- Node.js
- Sass
- HTML
- CSS

## Requisitos

Para poder utilizar mi portfolio, asegúrate de contar con lo siguiente:

- Un ordenador con acceso a internet.
- Instalación de las tecnologías mencionadas anteriormente (React.js, Node.js, etc.).
- Navegador web compatible, como Chrome.

## Instalación

Para configurar el proyecto en tu máquina local, sigue estas instrucciones:

1. Clona este repositorio en tu computadora.
2. Navega al directorio del proyecto en tu terminal.
3. Ejecuta el comando `npm install` para instalar las dependencias.
4. Una vez que se completen las instalaciones, ejecuta `npm start` para iniciar la aplicación en tu navegador.

## Despliegue

La página está desplegada en Internet utilizando Vercel y puedes visitarla en el siguiente enlace: [https://portfolio-adrianmartinezteba.vercel.app/](https://portfolio-adrianmartinezteba.vercel.app/)

Haz clic en el enlace proporcionado para acceder directamente a mi portfolio en vivo, donde podrás experimentar la página interactiva y explorar mis proyectos y curriculum. ¡Espero que lo disfrutes!

Si tienes algún problema con el enlace o encuentras algún error en la página, no dudes en contactarme a través de mi correo electrónico [adrianmartineztebawork@gmail.com](mailto:adrianmartineztebawork@gmail.com). Agradezco tus comentarios y sugerencias para mejorar mi portfolio.

¡Gracias por tu interés en mi trabajo! 😊

## Contacto

Si tienes alguna pregunta, deseas colaborar o tienes algún consejo o sugerencia, no dudes en escribirme a adrianmartineztebawork@gmail.com. ¡Espero que disfrutes explorando mi portfolio!

¡Gracias por visitar mi página! 😊
