import React from "react";
import { Row, Col, Card } from "react-bootstrap";

function Tools(props) {
  return (
    <Row xs={1} md={2} className="g-4 animate__animated animate__bounceInLeft animate__slow animate__delay-1s">
      <Col>
        <Card style={{
            backgroundImage:
              'url("./assets/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107.jpg")',
            backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPositionX: "50vh", height: "30vh"  
          }}>
          
             <Card.Body style={{backgroundColor: "rgba(10,10,10,0.5)", color: "white"}}>
            <Card.Title><h5 className="display-5">EDITORS</h5></Card.Title>
            <Card.Text>
            <p className="lead">
              VS-Code Visual-Studio-Community-Edition Netbeans-12.6 Android-Studio-Jetbrains
              </p>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>

      <Col>
        <Card style={{
            backgroundImage:
              'url("./assets/programmer-working-concept-with-people-scene-vector-illustration_198565-2479.jpg")',
            backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPositionX: "40vh", height: "30vh"  
          }}>
          
             <Card.Body style={{backgroundColor: "rgba(10,10,10,0.5)", color: "white"}}>
            <Card.Title><h5 className="display-5">Skills</h5></Card.Title>
            <Card.Text><p className="lead">
              Figma Office-Suite Postman Linux-["Ubuntu" | "Kali" | "Mint". KDE |
              Debian | Arch] Microsoft-Sql-Server-Manager Ngrok Jira 
              </p>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default Tools;
