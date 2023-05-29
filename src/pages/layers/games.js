import React from "react";
import { Row, Col, Card, ListGroup } from "react-bootstrap";

function GamesCard(props) {
  return (
    <>
      <Row
        xs={1}
        md={1}
        className="g-4 animate__animated animate__bounceInDown animate__slow animate__delay-1s"
      >
        <Col>
          <a
            // href="https://merge-bd5de.web.app/"
            style={{ textDecoration: "none" }}
          >
            <Row
              xs={1}
              md={3}
              className="g-4 animate__animated animate__fadeIn animate__slow animate__delay-2s"
            >
              <Col> 
                  <img
                    style={{maxWidth: "22vh", borderRadius: "100px", marginLeft: "10%"}}
                    src="https://images-eds-ssl.xboxlive.com/image?url=wHwbXKif8cus8csoZ03RW_ES.ojiJijNBGRVUbTnZKsoCCCkjlsEJrrMqDkYqs3MQY3wgAESnkyX4Gmej8l7gPS5GENGrXwLbPwZcvZORCNupfrVXG7WOyb0.K46.VqgUhVZuu8m237hUOYGTsQJr0AnI.rYR6oriwpGRExw14U-&format=png&h=253&w=253"
                   alt="profile pic"/>
               
              </Col>

              <Col>
                     <h4 className="display-4">Pukuta M . XBOX</h4>                   
                        <Row md={2}>
                    <p className="lead">Followers<h5 className="display-3">6</h5></p>
                    <p className="lead">Friends<h5 className="display-3">83</h5></p>
                    </Row>
                    
              </Col>
              <Col>
                    <h4 className="display-5">Last seen 14h ago: Home</h4>
                    <h4 className="display-5">Location: Lusaka Zambia</h4>
                    <h4 className="display-5">Bio: Things that work</h4>
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
          <a
            // href="https://merge-bd5de.web.app/"
            style={{ textDecoration: "none" }}
          >
            <Card
              style={{
                backgroundImage:
                  'url("./assets/games/c0fc8071-94e3-4978-a0ea-7eb9105662c5.jpg")',
                backgroundSize: "cover",
              }}
            >
              <Card.Body
                style={{
                  backgroundColor: "rgba(10,10,10,0.3)",
                  color: "white",
                }}
              >
                <Card.Title>
                  <h5 className="display-5">Mortal Kombat</h5>
                </Card.Title>
                <Card.Text>
                  <p className="lead">
                    Favourite character Sub Zero
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </a>
        </Col>

        <Col>
          <a
            // href="https://hospitalfinder.web.app/"
            style={{ textDecoration: "none" }}
          >
            <Card
              style={{
                backgroundImage: 'url("./assets/games/R (1).jpg")',
                backgroundSize: "cover",
              }}
            >
              <Card.Body
                style={{
                  backgroundColor: "rgba(10,10,10,0.3)",
                  color: "white",
                }}
              >
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
          <a style={{ textDecoration: "none" }}>
            <Card
              style={{
                backgroundImage:
                  'url("./assets/games/wallpaper_forza_horizon_4_01_1920x1080.jpg")',
                backgroundSize: "cover",
              }}
            >
              <Card.Body
                style={{
                  backgroundColor: "rgba(10,10,10,0.3)",
                  color: "white",
                }}
              >
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
          <a
            // href="https://eliotalders0n.github.io/slushy/"
            style={{ textDecoration: "none" }}
          >
            <Card
              style={{
                backgroundImage: 'url("./assets/games/img (2).jpg")',
                backgroundSize: "cover",
              }}
            >
              <Card.Body
                style={{
                  backgroundColor: "rgba(10,10,10,0.3)",
                  color: "white",
                }}
              >
                <Card.Title>
                  <h5 className="display-5">ASSASSINS CREED</h5>
                </Card.Title>
                <Card.Text>
                  <p className="lead">I have a thing for this franchise. Really enjoyed Origins though.</p>
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
          <a
            // href="https://eliotalders0n.github.io/alba.associates/"
            style={{ textDecoration: "none" }}
          >
            <Card
              style={{
                backgroundImage: 'url("./assets/games/img (1).jpg")',
                backgroundSize: "cover",
              }}
            >
              <Card.Body
                style={{
                  backgroundColor: "rgba(10,10,10,0.3)",
                  color: "white",
                }}
              >
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
          <a
            // href="https://eliotalders0n.github.io/HoodHunk/"
            style={{ textDecoration: "none" }}
          >
            <Card
              style={{
                backgroundImage:
                  'url("./assets/games/wallpaper_gears_5_01_1920x1080.jpg")',
                backgroundSize: "cover",
              }}
            >
              <Card.Body
                style={{
                  backgroundColor: "rgba(10,10,10,0.3)",
                  color: "white",
                }}
              >
                <Card.Title>
                  <h5 className="display-5">GEARS</h5>
                </Card.Title>
                <Card.Text>
                  <p className="lead">All the heavens and all the hells are within you</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </a>
        </Col>

        <Col>
          <a
            // href="https://eliotalders0n.github.io/martialbnkisu/"
            style={{ textDecoration: "none" }}
          >
            <Card
              style={{
                backgroundImage: 'url("./assets/games/img.jpg")',
                backgroundSize: "cover",
              }}
            >
              <Card.Body
                style={{
                  backgroundColor: "rgba(10,10,10,0.3)",
                  color: "white",
                }}
              >
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
          <a
            // href="https://eliotalders0n.github.io/Sigma/"
            style={{ textDecoration: "none" }}
          >
            <Card
              style={{
                backgroundImage:
                  'url("./assets/games/wallpaper_call_of_duty_modern_warfare_01_1920x1080.jpg")',
                backgroundSize: "cover",
              }}
            >
              <Card.Body
                style={{
                  backgroundColor: "rgba(10,10,10,0.3)",
                  color: "white",
                }}
              >
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
      </Row>
    </>
  );
}

export default GamesCard;
