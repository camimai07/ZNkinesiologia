import { Button, Container, Nav } from "react-bootstrap";
import "./Home.css";
import { GiCheckMark } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import { Logo } from "../Navbar/Logo";
export const Home = () => {
  return (
    <>
      <div className="vh-100 w-100 imagen position-relative color-text ">
        <Container>
          <div>
            <div className="texto pt d-flex flex-column justify-content-center plus home-query text-light">
              <Nav.Item>
                <NavLink
                  className=" text-decoration-none text-light plus fs-5 logo-query-none"
                  to={"ZNkinesiologia/"}
                >
                  <Logo />
                </NavLink>
              </Nav.Item>
              <h1 className="my-5 text-uppercase query-text">
                Kinesiología a Domicilio
              </h1>
              <div className="plus">
                <h5 className="lh-base">
                  <GiCheckMark className="me-4" />
                  Kinesiología motora
                </h5>
                <h5 className="lh-base">
                  <GiCheckMark className="me-4" />
                  Kinesiología respiratoria
                </h5>
                <h5 className="lh-base">
                  <GiCheckMark className="me-4" />
                  Pacientes ventilados
                </h5>
                <h5 className="lh-base">
                  <GiCheckMark className="me-4" />
                  Rehabilitación traumatológica
                </h5>
                <h5 className="lh-base">
                  <GiCheckMark className="me-4" />
                  Neurotapping
                </h5>
                <h5 className="lh-base">
                  <GiCheckMark className="me-4" />
                  Adultos y pediátricos
                </h5>
              </div>
              <footer className="mt-5 quick">
                <Button
                  variant="outline-light"
                  href="https://wa.me/+5491158953540"
                  target="_blank"
                  className="p-3 rounded-4"
                >
                  Reservá una cita por <strong>WhatsApp</strong> ahora
                </Button>
              </footer>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};
