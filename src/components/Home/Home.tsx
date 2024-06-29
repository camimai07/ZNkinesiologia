import { Button, Container } from "react-bootstrap";
import "./Home.css";
import { GiCheckMark } from "react-icons/gi";
import { Link } from "react-router-dom";
export const Home = () => {
  return (
    <>
      <div className="bg vh-100">
        <Container className="pt text-light d-flex flex-column justify-content-center plus home-query">
          <h1 className="mb-5">Kinesiología a Domicilio</h1>
          <div>
            <p>
              <GiCheckMark className="me-4" />
              Kinesiología motora
            </p>
            <p>
              <GiCheckMark className="me-4" />
              Kinesiología respiratoria preventiva
            </p>
            <p>
              <GiCheckMark className="me-4" />
              Pacientes ventilados
            </p>
            <p>
              <GiCheckMark className="me-4" />
              Rehabilitación traumatológica
            </p>
            <p>
              <GiCheckMark className="me-4" />
              Neurotapping
            </p>
            <p>
              <GiCheckMark className="me-4" />
              Adultos y pediátricos
            </p>
          </div>
          <footer className="mt-5">
            {/* <a
              href="https://wa.me/+5491158953540"
              role="button"
              //   className="btn btn-outline-light"
            >
              <button className="btn btn-outline-light">
                <small>
                  Reserva una cita por <strong>WhatsApp</strong> ahora
                </small>
              </button>
            </a> */}
            <Button
              variant="outline-light"
              href="https://wa.me/+5491158953540"
              target="_blank"
            >
              <small>
                Reserva una cita por <strong>WhatsApp</strong> ahora
              </small>
            </Button>
          </footer>
        </Container>
      </div>
    </>
  );
};
