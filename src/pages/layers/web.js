import React from "react";
import { Row, Col, Card } from "react-bootstrap";

function Web(props) {
  const cardStyle = {
    backgroundSize: "cover",
    height: "100%",
    border: "none",
  };

  const cardBodyStyle = {
    backgroundColor: "rgba(10,10,10,0.8)",
    color: "white",
    height: "100%",
  };

  return (
    <>
      <Row
        xs={1}
        md={3}
        className="g-4 animate__animated animate__bounceInLeft animate__slow animate__delay-2s"
      >
        <Col>
          <Card
            style={{
              ...cardStyle,
              backgroundImage:
                'url("./assets/new-app-development-desktop_23-2148684987.jpg")',
            }}
          >
            <Card.Body style={cardBodyStyle}>
              <Card.Title>
                <h5 className="display-5">React Native / Expo</h5>
              </Card.Title>
              <Card.Text>
                <p className="lead">
                  Mobile apps for both ANDROID and IOS.
                  <br /> React for web too
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card
            style={{
              ...cardStyle,
              backgroundImage:
                'url("./assets/tiny-developers-programming-website-internet-platform-flat-vector-illustration-cartoon-programmers-near-screen-with-open-code-script-software-development-digital-technology-concept_.jpg")',
            }}
          >
            <Card.Body style={cardBodyStyle}>
              <Card.Title>
                <h5 className="display-5">Python</h5>
              </Card.Title>
              <Card.Text>
                <p className="lead">Love the Django framework</p>
              </Card.Text>
            </Card.Body>

            <Card.Body style={cardBodyStyle}>
              <Card.Title>
                <h5 className="display-5">Firebase</h5>
              </Card.Title>
              <Card.Text>
                <p className="lead">Login init deploy</p>
              </Card.Text>
            </Card.Body>

            <Card.Body style={cardBodyStyle}>
              <Card.Title>
                <h5 className="display-5">MySQL</h5>
              </Card.Title>
              <Card.Text>
                <p className="lead">It's just a name, its not really my SQL.</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card
            style={{
              ...cardStyle,
              backgroundImage:
                'url("./assets/web-development-coding-programming-languages-css-html-js-program-code-screen-laptop_530733-2087.jpg")',
            }}
          >
            <Card.Body style={cardBodyStyle}>
              <Card.Title>
                <h5 className="display-5">PHP</h5>
              </Card.Title>
              <Card.Text>
                <p className="lead">
                  Personal Home Page
                  <br />
                  Lorem ipsum blah! you know it goes. Laravel YES.
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <br />

      <Row
        xs={1}
        md={2}
        className="g-4 animate__animated animate__bounceInRight animate__slow animate__delay-2s"
      >
        <Col>
          <Card
            style={{
              ...cardStyle,
              backgroundImage:
                'url("./assets/www-concept-illustration_114360-2143.jpg")',
            }}
          >
            <Card.Body style={cardBodyStyle}>
              <Card.Title>
                <h5 className="display-5">Java</h5>
              </Card.Title>
              <Card.Text>
                <p className="lead">
                  Object-Oriented like me.
                  <br />
                  Monolith Projects currently. Experience with Groovy on Grails
                  not much Spring.
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card
            style={{
              ...cardStyle,
              backgroundImage:
                'url("./assets/code-typing-concept-illustration_114360-2937.jpg")',
            }}
          >
            <Card.Body style={cardBodyStyle}>
              <Card.Title>
                <h5 className="display-5">C# Asp.Net</h5>
              </Card.Title>
              <Card.Text>
                <p className="lead">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default Web;
