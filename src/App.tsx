import "./App.css";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { Home } from "./components/Home/Home";
import { Us } from "./components/Us/Us";
import { OurServices } from "./components/OurServices/OurServices";
import { Contact } from "./components/Contact/Contact";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/*" element={<Navigate to="/Inicio" />}></Route>
          <Route path="/Inicio" element={<Home />}></Route>
          <Route path="/Nosotros" element={<Us />}></Route>
          <Route path="/Servicios" element={<OurServices />}></Route>
          <Route path="/Contacto" element={<Contact />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
