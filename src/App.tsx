import "./App.css";
import { Route, Routes } from "react-router-dom";
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
        <Route path="ZNkinesiologia" element={<Home />}></Route>
        <Route path="ZNkinesiologia/Inicio" element={<Home />}></Route>
        <Route path="ZNkinesiologia/Nosotros" element={<Us />}></Route>
        <Route
          path="ZNkinesiologia/Servicios"
          element={<OurServices />}
        ></Route>
        <Route path="ZNkinesiologia/Contacto" element={<Contact />}></Route>
      </Routes>
    </>
  );
}

export default App;
