import React from "react";
import { Row, Col, Card } from "react-bootstrap";

function Mission(props) {
  return (
    <Row
      xs={1}
      md={4}
      className="g-4 animate__animated animate__bounceInDown animate__slow animate__delay-1s"
    >
      <Col>
        <Card
          style={{
            backgroundImage:
              'url("./assets/goal-illustration-concept_114360-903.jpg")',
            backgroundSize: "cover", 
          }}
        >
             <Card.Body style={{backgroundColor: "rgba(10,10,10,0.5)", color: "white"}}>
            <Card.Title><h5 className="display-5">Passion</h5></Card.Title>
            <Card.Text><p className="lead"> Keep my fire burning</p></Card.Text>
          </Card.Body>
        </Card>
      </Col>

      <Col>
        <Card style={{
            backgroundImage:
              'url("./assets/character-people-holding-creative-ideas-icons_53876-66187.jpg")',
            backgroundSize: "cover",
              
          }}>
             <Card.Body style={{backgroundColor: "rgba(10,10,10,0.5)", color: "white"}}>
            <Card.Title><h5 className="display-5">Focus</h5></Card.Title>
            <Card.Text><p className="lead"> On growth as an artist</p></Card.Text>
          </Card.Body>
        </Card>
      </Col>

      <Col>
        <Card style={{
            backgroundImage:
              'url("./assets/code-typing-concept-illustration_114360-2937.jpg")',
            backgroundSize: "cover",
              
          }}>
             <Card.Body style={{backgroundColor: "rgba(10,10,10,0.5)", color: "white"}}>
            <Card.Title><h5 className="display-5">Web</h5></Card.Title>
            <Card.Text><p className="lead"> You are looking at it</p></Card.Text>
          </Card.Body>
        </Card>
      </Col>

      <Col>
        <Card style={{
            backgroundImage:
              'url("./assets/hand-coding-concept-illustration_114360-8193.jpg")',
            backgroundSize: "cover",
              
          }}>
             <Card.Body style={{backgroundColor: "rgba(10,10,10,0.5)", color: "white"}}>
            <Card.Title><h5 className="display-5">Love</h5></Card.Title>
            <Card.Text><p className="lead"> within these lines</p></Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default Mission;
