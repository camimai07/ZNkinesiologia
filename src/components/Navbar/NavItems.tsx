import { Button, Nav, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export const NavItems = () => {
  return (
    <>
      <Nav.Item className="p-2">
        <NavLink
          className="text-decoration-none text-light "
          to={"ZNkinesiologia/Inicio"}
        >
          Inicio
        </NavLink>
      </Nav.Item>
      <NavDropdown
        title="Servicios"
        className="p-2"
        id="nav-dropdown"
        menuVariant="dark"
        bsPrefix="text-decoration-none text-light "
      >
        <NavDropdown.Item>Action</NavDropdown.Item>
        <NavDropdown.Item>Another action</NavDropdown.Item>
        <NavDropdown.Item>Something else here</NavDropdown.Item>
        <NavDropdown.Item>Separated link</NavDropdown.Item>
      </NavDropdown>

      <Nav.Item className="p-2">
        <NavLink
          className="text-decoration-none text-light"
          to={"ZNkinesiologia/Nosotros"}
        >
          Nosotros
        </NavLink>
      </Nav.Item>
    </>
  );
};
