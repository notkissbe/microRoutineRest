import { useEffect, useState } from "react";
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

  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
  fetch("http://localhost:3000/auth/profile", {
    method: "GET",
    headers: new Headers({
      "Authorization": `Bearer ${localStorage.getItem("jwt")}`
    }),
  }).then((response) => {
    console.log(response.ok);
    if (response.ok) {
      setLoggedIn(true);
    }
  });}, []);

  console.log(loggedIn);

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
      {loggedIn ? (
        <Nav>
          <NavDropdown title="Profil" id="basic-nav-dropdown">
            <NavDropdown.Item href="/profile">Profilom</NavDropdown.Item>
            <NavDropdown.Item href="/logout">Kijelentkezés</NavDropdown.Item>
            <NavDropdown.Item href="/cart">Kosár</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      ) : (
        <Nav>
          <NavDropdown title="Fiók" id="basic-nav-dropdown">
            <NavDropdown.Item href="/login">Bejelentkezés</NavDropdown.Item>
            <NavDropdown.Item href="/register">Regisztráció</NavDropdown.Item>
            <NavDropdown.Item href="/cart">Kosár</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      )}
    </Container>
  </Navbar>
</header>

  );
}
