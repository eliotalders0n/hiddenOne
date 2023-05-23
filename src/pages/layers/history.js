import React from "react";
import { Row, Col, Card } from "react-bootstrap";

function History(props) {
  return (
    <Row
      xs={1}
      md={1}
      className="g-4 animate__animated animate__fadeIn animate__slow animate__delay-2s"
    >
      <Col>
        <Card style={{
            backgroundImage:
              'url("./assets/web-development-coding-programming-languages-css-html-js-program-code-screen-laptop_530733-2087.jpg")',
            backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPositionX: "30vh", height: "30vh"  
          }}>
          <Card.Body style={{backgroundColor: "rgba(10,10,10,0.5)", color: "white"}}>
            <Card.Title><h5 className="display-5">TROPHIES</h5></Card.Title>
            <Card.Text><p className="lead">
              Data Hack -4FI- Certificate of participation Country Winner Team
              Binary
              <br />
              Facebook For Developers AI Masterclass Certificate of Attendance
              "Neural Networks" | "Speech" | "Computer Vision" | "Recurrent
              Neural Networks"
              <br />
              Waka Time Code Hours
              <br />
              <a href="https://wakatime.com/@3cc29f21-d026-475a-a28f-a86786654c5a"><img src="https://wakatime.com/badge/user/3cc29f21-d026-475a-a28f-a86786654c5a.svg" alt="Total time coded since Nov 2 2021" /></a>
              <br />
              "Your most active day was Mon Aug 22nd with 12 hrs 12 mins of
              activity".
              </p>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default History;
