import React from "react";
import { Row, Col, Card } from "react-bootstrap";

function ProjectCard(props) {
  return (
    <>
    <Row
      xs={1}
      md={2}
      className="g-4 animate__animated animate__bounceInDown animate__slow animate__delay-1s"
    >
      <Col>
      <a href="https://merge-bd5de.web.app/" style={{textDecoration: "none"}}>
        <Card style={{
            backgroundColor : "rgba(10,10,10,0.2)",
            backgroundSize: "cover",
              
          }}>
          
             <Card.Body style={{backgroundColor: "rgba(10,10,10,0.5)", color: "white"}}>
            <Card.Title><h5 className="display-5">Merge Social</h5></Card.Title>
            <Card.Text><p className="lead">Social network for the MLFC Merge Ministry.</p></Card.Text>
          </Card.Body>
        </Card>
        </a>
      </Col>

      <Col>
      <a href="https://hospitalfinder.web.app/" style={{textDecoration: "none"}}>
        <Card style={{
            backgroundColor : "rgba(10,10,10,0.2)",
            backgroundSize: "cover",
              
          }}>
          
             <Card.Body style={{backgroundColor: "rgba(10,10,10,0.5)", color: "white"}}>
            <Card.Title><h5 className="display-5">Hospital Finder</h5></Card.Title>
            <Card.Text><p className="lead">An easy way to locate Healthcare</p></Card.Text>
          </Card.Body>
        </Card>
        </a>
      </Col>

      <Col>
      <a href="https://careann.web.app/" style={{textDecoration: "none"}}>
        <Card style={{
            backgroundColor : "rgba(10,10,10,0.2)",
            backgroundSize: "cover",
              
          }}>
          
             <Card.Body style={{backgroundColor: "rgba(10,10,10,0.5)", color: "white"}}>
            <Card.Title><h5 className="display-5">Careann</h5></Card.Title>
            <Card.Text><p className="lead">Find a caregiver in your area</p></Card.Text>
          </Card.Body>
        </Card>
        </a>
      </Col>

      <Col>
      <a href="https://eliotalders0n.github.io/slushy/" style={{textDecoration: "none"}}>
        <Card style={{
            backgroundColor : "rgba(10,10,10,0.2)",
            backgroundSize: "cover",
              
          }}>
          
             <Card.Body style={{backgroundColor: "rgba(10,10,10,0.5)", color: "white"}}>
            <Card.Title><h5 className="display-5">Slushy</h5></Card.Title>
            <Card.Text><p className="lead">Passionate about hair</p></Card.Text>
          </Card.Body>
        </Card>
        </a>
      </Col>
    </Row>

    <Row
      xs={1}
      md={2}
      className="g-4 my-2 animate__animated animate__bounceInDown animate__slow animate__delay-1s"
    >
      <Col>
      <a href="https://eliotalders0n.github.io/alba.associates/" style={{textDecoration: "none"}}>
        <Card style={{
            backgroundColor : "rgba(10,10,10,0.2)",
            backgroundSize: "cover",
              
          }}>
          
             <Card.Body style={{backgroundColor: "rgba(10,10,10,0.5)", color: "white"}}>
            <Card.Title><h5 className="display-5">Alba Associates</h5></Card.Title>
            <Card.Text><p className="lead">Their company profile</p></Card.Text>
          </Card.Body>
        </Card>
        </a>
      </Col>

      <Col>
      <a href="https://eliotalders0n.github.io/HoodHunk/" style={{textDecoration: "none"}}>
        <Card style={{
            backgroundColor : "rgba(10,10,10,0.2)",
            backgroundSize: "cover",
              
          }}>
          
             <Card.Body style={{backgroundColor: "rgba(10,10,10,0.5)", color: "white"}}>
            <Card.Title><h5 className="display-5">HoodHunk</h5></Card.Title>
            <Card.Text><p className="lead">Find all his music here</p></Card.Text>
          </Card.Body>
        </Card>
        </a>
      </Col>

      <Col>
      <a href="https://eliotalders0n.github.io/martialbnkisu/" style={{textDecoration: "none"}}>
        <Card style={{
            backgroundColor : "rgba(10,10,10,0.2)",
            backgroundSize: "cover",
              
          }}>
          
             <Card.Body style={{backgroundColor: "rgba(10,10,10,0.5)", color: "white"}}>
            <Card.Title><h5 className="display-5">Martial</h5></Card.Title>
            <Card.Text><p className="lead">A great talent.</p></Card.Text>
          </Card.Body>
        </Card>
        </a>
      </Col>

      <Col>
      <a href="https://eliotalders0n.github.io/Sigma/" style={{textDecoration: "none"}}>
        <Card style={{
            backgroundColor : "rgba(10,10,10,0.2)",
            backgroundSize: "cover",
              
          }}>
          
             <Card.Body style={{backgroundColor: "rgba(10,10,10,0.5)", color: "white"}}>
            <Card.Title><h5 className="display-5">Sigma</h5></Card.Title>
            <Card.Text><p className="lead">Locate us here</p></Card.Text>
          </Card.Body>
        </Card>
        </a>
      </Col>
    </Row>
    </>
  );
}

export default ProjectCard;
