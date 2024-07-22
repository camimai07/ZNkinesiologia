import {
  Button,
  ButtonGroup,
  Col,
  Collapse,
  Container,
  Dropdown,
  DropdownButton,
  Nav,
  NavDropdown,
  Row,
  Stack,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Logo } from "./Logo";
import { IoMenuOutline } from "react-icons/io5";
import { useState } from "react";
import { NavItems } from "./NavItems";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Nav className="nav-query d-flex align-items-center justify-content-between w-100 px-5 py-4 position-fixed z-3">
        <Nav.Item>
          <NavLink
            className="text-decoration-none text-light plus fs-5 logo-none"
            to={"ZNkinesiologia/"}
          >
            <Logo />
          </NavLink>
        </Nav.Item>
        <div
          style={{ display: "flex" }}
          className="nav-query-items justify-content-between w-25 text-light "
        >
          <NavItems />
        </div>
        <Nav.Item>
          <NavLink
            style={{ visibility: "visible" }}
            className="text-decoration-none  nav-query-contact"
            to={"ZNkinesiologia/Contacto"}
          >
            <Button variant="outline-light">Contacto</Button>
          </NavLink>
        </Nav.Item>
        <Collapse in={open}>
          <div className="justify-content-center text-center bg-dark w-50 rounded-4 py-2">
            <NavItems />
            <Nav.Item className="my-3">
              <NavLink
                className="text-decoration-none "
                to={"ZNkinesiologia/Contacto"}
              >
                <Button variant="outline-light">Contacto</Button>
              </NavLink>
            </Nav.Item>
          </div>
        </Collapse>
        <Button
          onClick={() => setOpen(!open)}
          variant="link"
          className="menu"
          style={{ display: "none" }}
        >
          <IoMenuOutline
            color="white"
            style={{ display: "none", cursor: "pointer" }}
            className="menu"
          />
        </Button>
      </Nav>
    </>
  );
};
