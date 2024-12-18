import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";

export default function Profile() {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      fetch("http://localhost:3000/auth/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => setUsername(data.username));
    }
  }, []);

  return (
    <Container>
      <h1>Profile</h1>
      <p>Username: {username}</p>
    </Container>
  );
}
