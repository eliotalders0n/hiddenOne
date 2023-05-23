import React from "react";
import { Row, Col, Card } from "react-bootstrap";

function Equip(props) {
  return (
    <Row xs={1} md={1} className="g-4 animate__animated animate__bounceInDown animate__slow animate__delay-1s">
      <Col>
        <Card style={{
            backgroundImage:
              'url("./assets/open-laptop-icon-cartoon-illustration_107791-4112.jpg")',
            backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPositionX: "60vh"
              
          }}>
             <Card.Body style={{backgroundColor: "rgba(10,10,10,0.5)", color: "white"}}>
            <Card.Title><h5 className="display-5">NEVER</h5></Card.Title>
            <Card.Text>
            <p className="lead">
              Move without my Laptop
              <br />
              ------------------
              <br />
              System Information
              <br />
              ------------------
              <br />
              Time of this report: 4/25/2022, 14:19:51
              <br />
              Operating System: Windows 11 Home 64-bit (10.0, Build 22000)
              <br />
              System Model: HP 240 G6 Notebook PC
              <br />
              Processor: Intel(R) Core(TM) i3-7020U CPU @ 2.30GHz (4 CPUs),
              ~2.3GHz
              <br />
              Memory: 16384MB RAM
              <br />
              DirectX Version: DirectX 12
              <br />
              </p>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default Equip;
