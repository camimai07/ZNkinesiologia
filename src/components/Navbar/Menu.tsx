import { Dropdown, DropdownButton, Stack } from "react-bootstrap";

export const Menu = () => {
  return (
    <>
      <Stack className="menu" style={{ display: "none" }}>
        <DropdownButton
          id="dropdown-button-dark-example2"
          variant="secondary"
          title="Dark dropdown"
          className="mt-2"
          data-bs-theme="dark"
        >
          <Dropdown.Item href="#/action-1" active>
            Action
          </Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
        </DropdownButton>
      </Stack>
    </>
  );
};
