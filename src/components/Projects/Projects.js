import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import elearning from '../../Assets/Projects/eLearning.png'
import textUtils from "../../Assets/Projects/textUtils.png";
import foodApp from "../../Assets/Projects/foodApp.png";
import googleCopy from '../../Assets/Projects/googleCopy.png';
import tempConverter from '../../Assets/Projects/tempConverter.png';

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={elearning}
              isBlog={false}
              title="E-Learning Management System"
              description="E-Learning Web App where students and techers interact with each others. Teachers Learn their students through text , video , pdf. A fully responsive website for learning any kinds of knowledge.It is made by using HTML, CSS, JS , PHP and MySQL."
              ghLink="https://github.com/sushilsharma0/minorproject"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={textUtils}
              isBlog={false}
              title="Text Utils"
              description="A simple text utility web app where you can convert your text to upper case, lower case, capitalize, reverse, remove extra spaces and copy the text. It is made by using Reactjs. It is best simple and easy to use text utility web app."
              ghLink="https://github.com/sushilsharma0/textUtils"
              demoLink="https://mywordutils.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={foodApp}
              isBlog={false}
              title="Food App"
              description="A simple food ordering web app where you can order your favourite food and get it delivered to your home. It is made by using mongoDb, Express, React and Node. It has all admin panel to manage the orders and food items.I has all the features like add to cart, payment gateway, order history, etc."
              ghLink="https://github.com/sushilsharma0/foodAppFrontend"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={googleCopy}
              isBlog={false}
              title="Google Clone"
              description="A simple clone of google search engine. It is made by using Reactjs. It has all the features like search, image search, etc. It is fully responsive and easy to use. It is made by using html, css and js."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tempConverter}
              isBlog={false}
              title="Temperature Converter"
              description="A full responsive temperature converter web app where you can convert your temperature from celsius to fahrenheit and fahrenheit to celsius. It is made by using HTML, CSS and JS. It is best simple and easy to use temperature converter web app."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
