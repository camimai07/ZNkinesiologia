import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { Home } from "./components/Home/Home";
import { Us } from "./components/Us/Us";
import { OurServices } from "./components/OurServices/OurServices";
import { Contact } from "./components/Contact/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="*" element={<Home />}></Route>
        <Route path="/Inicio" element={<Home />}></Route>
        <Route path="/Nosotros" element={<Us />}></Route>
        <Route path="/Servicios" element={<OurServices />}></Route>
        <Route path="/Contacto" element={<Contact />}></Route>
      </Routes>
    </>
  );
}

export default App;
