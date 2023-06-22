import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home/home";
import Biografia from "./components/biografia/biografia";
import Proyectos from "./components/proyectos/proyectos";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Biografia/>} />
        <Route path="/" element={<Proyectos />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
