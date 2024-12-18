import {
  Button,
  Container,
  Form,
  InputGroup,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";

export default function Header() {
  /*
  
  ## for account dropdown
  <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              */
  return (
<header>
  <Navbar expand="lg" className="bg-body-tertiary">
    <Container className="d-flex align-items-center justify-content-between">
      {/* Brand */}
      <Navbar.Brand
        href="/products"
        style={{ fontFamily: "Anton", fontSize: "30px" }}
        className="me-3"
      >
        Webshop
      </Navbar.Brand>

      {/* Search */}
      <div className="flex-grow-1 d-flex me-3">
        <InputGroup className="w-100">
          <Form.Control
            type="search"
            placeholder="Search"
            style={{ flex: "1" }}
          />
          <Button variant="secondary">🔍</Button>
        </InputGroup>
      </div>

      {/* Navigation */}
      <Nav>
        <NavDropdown title="Fiók" id="basic-nav-dropdown">
          <NavDropdown.Item href="/login">Bejelentkezés</NavDropdown.Item>
          <NavDropdown.Item href="/register">Regisztráció</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Container>
  </Navbar>
</header>

  );
}
