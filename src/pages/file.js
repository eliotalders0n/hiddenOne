import React from "react";
import { Container } from "react-bootstrap";
import Layout from "./layout";
import ProjectCard from "./layers/projects";


const Projects = () => {
    return (
        <Container fluid style={{ padding: "0", backgroundColor: "rgba(100,100,100,0.1)", height:"100vh"}}>
      <Layout />
      <br />
      <Container fluid>
        <ProjectCard />
        <br />
      </Container>
    </Container>
    );
};

export default Projects;