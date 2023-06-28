import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home/home";
import Biografia from "./components/biografia/biografia";
import Proyectos from "./components/proyectos/proyectos";
import Person from "./components/Person/Person";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/biografia" element={<Biografia/>} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/person" element={<Person />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
