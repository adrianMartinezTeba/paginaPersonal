import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home/home';
import Biografia from './components/biografia/biografia';
import Proyectos from './components/proyectos/proyectos';
import { PersonProvider } from './context/PersonContext/PersonState';

function App() {
  return (
    <BrowserRouter>
      <PersonProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/biografia" element={<Biografia />} />
          <Route path="/proyectos" element={<Proyectos />} />
        </Routes>
      </PersonProvider>
    </BrowserRouter>
  );
}

export default App;
