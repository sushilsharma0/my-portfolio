import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgWindows } from "react-icons/cg";
import {
  SiVisualstudiocode,
  SiPostman,
  SiVercel,
  SiNetlify,
} from "react-icons/si";


function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" title="Windows">
        <CgWindows />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Visual Studio Code">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Postman">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Vercel">
        <SiVercel />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Netlify">
        <SiNetlify />
      </Col>
    </Row>
  );
}

export default Toolstack;
