import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { Main } from "./components/Main";
import { Home } from "./components/Home/Home";
import { Us } from "./components/Us/Us";
import { OurServices } from "./components/OurServices/OurServices";
import { Contact } from "./components/Contact/Contact";

function App() {
  return (
    <>
      <Router>
        <Main>
          <Navbar />

          {/* resolver childrem en Main */}
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Inicio" element={<Home />}></Route>
            <Route path="/Nosotros" element={<Us />}></Route>
            <Route path="/Servicios" element={<OurServices />}></Route>
            <Route path="/Contacto" element={<Contact />}></Route>
          </Routes>
        </Main>
      </Router>
    </>
  );
}

export default App;
