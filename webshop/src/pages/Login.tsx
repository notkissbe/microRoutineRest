import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const response = await fetch("http://localhost:3000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();
    console.log(username, password);

    if (response.ok) {
      localStorage.setItem("jwt", data.access_token);
      console.log(data);
      console.log("Sikeres bejelentkezés");
      nav("/profile");
    }
    else {
      console.log("Sikertelen bejelentkezés");
    }
  };

  return (
    <Container>
      <h1>Bejelentkezés</h1>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Felhasználónév</Form.Label>
          <Form.Control
            type="text"
            placeholder="Felhasználónév"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Jelszó</Form.Label>
          <Form.Control
            type="password"
            placeholder="Jelszó"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={handleSubmit} className="w-100">
          Bejelentkezés
        </Button>
      </Form>
    </Container>
  );
}
