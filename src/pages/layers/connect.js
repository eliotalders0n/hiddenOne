import React from "react";
import { Row, Col, Card } from "react-bootstrap";

function Connect(props) {
  return (
    <Row xs={1} md={4} className="g-4 animate__animated animate__fadeIn animate__slow animate__delay-1s">
      <Col>
        <Card style={{
            backgroundImage:
              'url("./assets/react-native-mobile-app-abstract-concept-illustration-cross-platform-native-mobile-app-development-framework-javascript-library-user-interface-operating-system_335657-3350.jpg")',
            backgroundSize: "cover",
              
          }}>
          
             <Card.Body style={{backgroundColor: "rgba(10,10,10,0.5)", color: "white"}}>
            <Card.Title><h5 className="display-5">Github</h5></Card.Title>
            <Card.Text><p className="lead">Fork Pull Watch. @eliotalders0n.</p></Card.Text>
          </Card.Body>
        </Card>
      </Col>

      <Col>
        <Card style={{
            backgroundImage:
              'url("./assets/human-hand-holding-magnifying-glass-search-find-data-work-person-looking-through-loupe-inspecting-information-ideas-flat-vector-illustration-scientific-research-discovery-concept_74.jpg")',
            backgroundSize: "cover",
              
          }}>
          
             <Card.Body style={{backgroundColor: "rgba(10,10,10,0.5)", color: "white"}}>
            <Card.Title><h5 className="display-5">Facebook</h5></Card.Title>
            <Card.Text><p className="lead">@RootDedsec. Feel free to text me.</p></Card.Text>
          </Card.Body>
        </Card>
      </Col>

      <Col>
        <Card style={{
            backgroundImage:
              'url("./assets/code-isometric-design-icon-vector-web-illustration-3d-colorful-concept_697410-1309.jpg")',
            backgroundSize: "cover",
              
          }}>
          
             <Card.Body style={{backgroundColor: "rgba(10,10,10,0.5)", color: "white"}}>
            <Card.Title><h5 className="display-5">Twitter</h5></Card.Title>
            <Card.Text><p className="lead">@RecordCtrl. Follow me.</p></Card.Text>
          </Card.Body>
        </Card>
      </Col>

      <Col>
        <Card style={{
            backgroundImage:
              'url("./assets/mobile-marketing-concept-illustration_114360-1497.jpg")',
            backgroundSize: "cover",
              
          }}>
          
             <Card.Body style={{backgroundColor: "rgba(10,10,10,0.5)", color: "white"}}>
            <Card.Title><h5 className="display-5">Whatsapp</h5></Card.Title>
            <Card.Text><p className="lead">Text / Call +260 974 755 027</p></Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default Connect;