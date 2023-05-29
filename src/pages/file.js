import React from "react";
import { Container } from "react-bootstrap";
import Layout from "./layout";
import ProjectCard from "./layers/projects";


const Projects = () => {
    return (
        <Container fluid style={{ padding: "0", backgroundColor: "rgba(100,100,100,0.1)", height:"auto"}}>
      <Layout />
      <br />
      <Container fluid>
      <p className="lead text-center">
          <span style={{fontSize: "18px"}}>
          Click on any card to visit the site. <br/>
          </span>
        </p>
        <ProjectCard />
        <br />
      </Container>
    </Container>
    );
};

export default Projects;