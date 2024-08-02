// import { Badge } from "react-bootstrap";
import fondopeople from "../../assets/img/fondo-people.png";
import "./Us.css";
import { IoSparklesSharp } from "react-icons/io5";

export const Us = () => {
  return (
    <>
      <div className="w-100 h-100 overflow-y-scroll bg-light d-flex flex-column align-items-center plus ">
        <div
          className="w-100 shadow position-fixed"
          style={{ height: "120px", background: "#3253ad " }}
        ></div>
        <div
          className="d-grid gap-3 text-center query-text-us mx-3"
          style={{ marginTop: "170px" }}
        >
          <h1 className="fw-bold text-secondary w-100 ">
            Nuestro equipo <IoSparklesSharp color="#31cfeb " />
          </h1>
          <h5 className="lh-base text-body ">
            En ZN Kinesiología contamos con un equipo de profesionales altamente
            comprometido y con una amplia experiencia en kinesiología motora y
            respiratoria. Nos dedicamos a brindar un servicio personalizado,
            diseñado para mejorar la calidad de vida del paciente.
          </h5>
          <div>
            <img src={fondopeople} alt="fondo" className="query-us-img" />
          </div>
        </div>
        {/* <div className="my-5 d-flex justify-content-center flex-wrap gap-5 fs-1 w-100 plus ">
          <Badge bg="secondary">Buen trato</Badge>
          <Badge bg="secondary">Seguimiento</Badge>
          <Badge bg="secondary">Precios accesibles</Badge>
        </div> */}
      </div>
    </>
  );
};
