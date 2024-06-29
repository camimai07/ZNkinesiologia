import { Button, Container } from "react-bootstrap";
import "./Home.css";
import { GiCheckMark } from "react-icons/gi";
export const Home = () => {
  return (
    <>
      <div className="bg vh-100 ">
        <Container className="pt text-light d-flex flex-column justify-content-center plus home-query">
          <h1 className="mb-5">Kinesiología a Domicilio</h1>
          <div>
            <h5 className="lh-sm">
              <GiCheckMark className="me-4" />
              Kinesiología motora
            </h5>
            <h5 className="lh-base">
              <GiCheckMark className="me-4" />
              Kinesiología respiratoria preventiva
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
              <small>
                Reservá una cita por <strong>WhatsApp</strong> ahora
              </small>
            </Button>
          </footer>
        </Container>
      </div>
    </>
  );
};
