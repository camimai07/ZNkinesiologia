import { Button, Nav, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Logo } from "./Logo";
import { IoMenuOutline } from "react-icons/io5";

export const Navbar = () => {
  return (
    <>
      <Nav className="nav-query d-flex align-items-center justify-content-between w-100 px-5 py-4 position-fixed ">
        <Nav.Item>
          <NavLink
            className="text-decoration-none text-light bad fs-5"
            to={"ZNkinesiologia/"}
          >
            <Logo />
          </NavLink>
        </Nav.Item>
        <div
          style={{ display: "flex" }}
          className="nav-query-items justify-content-between w-25 "
        >
          <Nav.Item>
            <NavLink
              className="text-decoration-none text-light quick"
              to={"ZNkinesiologia/Inicio"}
            >
              Inicio
            </NavLink>
          </Nav.Item>
          <NavDropdown
            title="Servicios"
            id="nav-dropdown"
            bsPrefix="text-decoration-none text-light quick"
          >
            <NavDropdown.Item>Action</NavDropdown.Item>
            <NavDropdown.Item>Another action</NavDropdown.Item>
            <NavDropdown.Item>Something else here</NavDropdown.Item>
            <NavDropdown.Item>Separated link</NavDropdown.Item>
          </NavDropdown>

          <Nav.Item>
            <NavLink
              className="text-decoration-none text-light quick"
              to={"ZNkinesiologia/Nosotros"}
            >
              Nosotros
            </NavLink>
          </Nav.Item>
        </div>
        <Nav.Item>
          <NavLink
            style={{ visibility: "visible" }}
            className="text-decoration-none text-light quick nav-query-contact"
            to={"ZNkinesiologia/Contacto"}
          >
            <Button variant="outline-light">Contacto</Button>
          </NavLink>
        </Nav.Item>

        <IoMenuOutline
          color="white"
          style={{ display: "none", cursor: "pointer" }}
          className="menu mb-4"
        />
      </Nav>
    </>
  );
};
