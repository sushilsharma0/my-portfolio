import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom"; // Assuming you're using react-router for navigation

function NotFoundPage() {
  return (
    <Container fluid className="project-section" style={{ height: "93.5vh" }}>
      <Container>
        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <h1 className="project-heading">
            404 <strong className="purple">Page Not Found </strong>
          </h1>
          <p style={{ color: "white" }}>
            Oops! The page you are looking for does not exist.
          </p>
          <Link to="/" className="btn btn-primary">Go Home</Link>
        </div>
      </Container>
    </Container>
  );
}

export default NotFoundPage;