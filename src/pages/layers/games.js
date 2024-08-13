import React from "react";
import { Row, Col, Card } from "react-bootstrap";

function GamesCard(props) {
  const cardStyle = {
    backgroundSize: "cover",
    height: "40vh",
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
        md={1}
        className="g-4 animate__animated animate__bounceInDown animate__slow animate__delay-1s"
      >
        <Col>
          <a href="#" style={{ textDecoration: "none", color: "white" }}>
            <Row
              xs={1}
              md={1}
              className="g-4 animate__animated animate__fadeIn animate__slow animate__delay-2s"
            >
              <Col>
                <h4 className="display-4 text-center">CONSOLE - XBOX</h4>
              </Col>
            </Row>
          </a>
        </Col>
      </Row>

      <br />

      <Row
        xs={1}
        md={2}
        className="g-4 animate__animated animate__bounceInDown animate__slow animate__delay-1s"
      >
        <Col>
          <a href="#" style={{ textDecoration: "none" }}>
            <Card
              style={{
                ...cardStyle,
                backgroundImage:
                  'url("./assets/games/wallpaper_call_of_duty_modern_warfare_01_1920x1080.jpg")',
              }}
            >
              <Card.Body style={cardBodyStyle}>
                <Card.Title>
                  <h5 className="display-5">CALL OF DUTY</h5>
                </Card.Title>
                <Card.Text>
                  <p className="lead">Target located.</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </a>
        </Col>

        <Col>
          <a href="#" style={{ textDecoration: "none" }}>
            <Card
              style={{
                ...cardStyle,
                backgroundImage: 'url("./assets/games/R (1).jpg")',
              }}
            >
              <Card.Body style={cardBodyStyle}>
                <Card.Title>
                  <h5 className="display-5">FIFA</h5>
                </Card.Title>
                <Card.Text>
                  <p className="lead">I am tough to beat</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </a>
        </Col>

        <Col>
          <a href="#" style={{ textDecoration: "none" }}>
            <Card
              style={{
                ...cardStyle,
                backgroundImage:
                  'url("./assets/games/wallpaper_forza_horizon_4_01_1920x1080.jpg")',
              }}
            >
              <Card.Body style={cardBodyStyle}>
                <Card.Title>
                  <h5 className="display-5">FORZA</h5>
                </Card.Title>
                <Card.Text>
                  <p className="lead">I call shotgun</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </a>
        </Col>

        <Col>
          <a href="#" style={{ textDecoration: "none" }}>
            <Card
              style={{
                ...cardStyle,
                backgroundImage: 'url("./assets/games/img (2).jpg")',
              }}
            >
              <Card.Body style={cardBodyStyle}>
                <Card.Title>
                  <h5 className="display-5">ASSASSINS CREED</h5>
                </Card.Title>
                <Card.Text>
                  <p className="lead">
                    I have a thing for this franchise. Really enjoyed Origins
                    though.
                  </p>
                </Card.Text>
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
          <a href="#" style={{ textDecoration: "none" }}>
            <Card
              style={{
                ...cardStyle,
                backgroundImage: 'url("./assets/games/img (1).jpg")',
              }}
            >
              <Card.Body style={cardBodyStyle}>
                <Card.Title>
                  <h5 className="display-5">HALO</h5>
                </Card.Title>
                <Card.Text>
                  <p className="lead">Always been a fan of MasterChief</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </a>
        </Col>

        <Col>
          <a href="#" style={{ textDecoration: "none" }}>
            <Card
              style={{
                ...cardStyle,
                backgroundImage:
                  'url("./assets/games/wallpaper_gears_5_01_1920x1080.jpg")',
              }}
            >
              <Card.Body style={cardBodyStyle}>
                <Card.Title>
                  <h5 className="display-5">GEARS</h5>
                </Card.Title>
                <Card.Text>
                  <p className="lead">
                    All the heavens and all the hells are within you
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </a>
        </Col>

        <Col>
          <a href="#" style={{ textDecoration: "none" }}>
            <Card
              style={{
                ...cardStyle,
                backgroundImage: 'url("./assets/games/img.jpg")',
              }}
            >
              <Card.Body style={cardBodyStyle}>
                <Card.Title>
                  <h5 className="display-5">DIRT</h5>
                </Card.Title>
                <Card.Text>
                  <p className="lead">Pure driving satisfaction.</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </a>
        </Col>

        <Col>
          <a href="#" style={{ textDecoration: "none" }}>
            <Card
              style={{
                ...cardStyle,
                backgroundImage:
                  'url("./assets/games/c0fc8071-94e3-4978-a0ea-7eb9105662c5.jpg")',
              }}
            >
              <Card.Body style={cardBodyStyle}>
                <Card.Title>
                  <h5 className="display-5">Mortal Kombat</h5>
                </Card.Title>
                <Card.Text>
                  <p className="lead">Favourite character Sub Zero</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </a>
        </Col>
      </Row>
    </>
  );
}

export default GamesCard;
