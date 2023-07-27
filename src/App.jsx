import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Biografia from './components/Biografia/Biografia';
import Proyectos from './components/Proyectos/Proyectos';
import { PersonProvider } from './context/PersonContext/PersonState';
import Person from './components/Person/Person';
import Hall from './components/Hall/Hall';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import RedirectComponent from './components/RedirectComponent/RedirectComponent';

function App() {
  return (
    <BrowserRouter>
    <RedirectComponent/>
      <PersonProvider>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/hall' element={<Hall/>}/>
          <Route path="/biografia" element={<Biografia />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/person" element={<Person />} />
        </Routes>
        <Footer/>
      </PersonProvider>
    </BrowserRouter>
  );
}

export default App;
