import React, { useState } from "react";
import { Row, Col, Card, CardImg, Button } from "react-bootstrap";

function ArtCard(props) {
  const [decipheredText, setDecipheredText] = useState("");
  const [showPicture, setShowPicture] = useState(false);

  const handleInputChange = (event) => {
    setDecipheredText(event.target.value);
    setShowPicture(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (decipheredText.toLowerCase() === "i miss you dad") {
      setShowPicture(true);
    } else {
      setDecipheredText("");
      setShowPicture(false);
    }
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={decipheredText}
            onChange={handleInputChange}
            placeholder="Enter deciphered text in full and click submit"
            style={{width: '100%', border: "none", padding:"8px"}}
          />
          <Button variant="dark"  type="submit" style={{width: '100%', marginTop: "1vh", padding:"6px"}}>Submit</Button>
        </form>
        {showPicture && (
          <Card className="animate__animated animate__zoomInDown animate__slow animate__delay-1s">
            <CardImg src="/assets/pictures/343036692_260119343046372_2360426197370411664_n.jpg" />
            <Card.Body style={{ backgroundColor: "white", color: "black" }}>
              <Card.Text>
                <p className="lead"> Lets keep his fire burning</p>
              </Card.Text>
            </Card.Body>
          </Card>
        )}
        {!showPicture && decipheredText !== "" && <p>Try again!</p>}
      </div>
      <Row
        xs={1}
        md={2}
        className="g-4 my-3 my-3 animate__animated animate__fadeInLeft animate__slow animate__delay-1s"
      >
        <Col>
          <Card>
            <CardImg src="/assets/pictures/103024907_256936239089801_4400559407874343639_n.jpg" />
            <Card.Body style={{ backgroundColor: "white", color: "black" }}>
              <Card.Text>
                <p className="lead"> Keep my fire burning</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card>
            <CardImg src="/assets/pictures/103325016_705867916901778_2912538854095696707_n.jpg" />
            <Card.Body style={{ backgroundColor: "white", color: "black" }}>
              <Card.Text>
                <p className="lead"> Keep my fire burning</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row
        xs={1}
        md={2}
        className="g-4 my-3 animate__animated animate__fadeInLeft animate__slow animate__delay-1s"
      >
        <Col>
          <Card>
            <CardImg src="/assets/pictures/103527671_682909652285032_8377646665691299009_n.jpg" />
            <Card.Body style={{ backgroundColor: "white", color: "black" }}>
              <Card.Text>
                <p className="lead"> Keep my fire burning</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card>
            <CardImg src="/assets/pictures/103535111_2888716534584987_4675730301894387337_n.jpg" />
            <Card.Body style={{ backgroundColor: "white", color: "black" }}>
              <Card.Text>
                <p className="lead"> Keep my fire burning</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row
        xs={1}
        md={2}
        className="g-4 my-3 animate__animated animate__fadeInLeft animate__slow animate__delay-1s"
      >
        <Col>
          <Card>
            <CardImg src="/assets/pictures/103544983_145203580441884_4764700209896978916_n.jpg" />
            <Card.Body style={{ backgroundColor: "white", color: "black" }}>
              <Card.Text>
                <p className="lead"> Keep my fire burning</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card>
            <CardImg src="/assets/pictures/291058223_2238870109597549_8574873571722442732_n.jpg" />
            <Card.Body style={{ backgroundColor: "white", color: "black" }}>
              <Card.Text>
                <p className="lead"> Keep my fire burning</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row
        xs={1}
        md={2}
        className="g-4 my-3 animate__animated animate__fadeInLeft animate__slow animate__delay-1s"
      >
        <Col>
          <Card>
            <CardImg src="/assets/pictures/291814736_182157160914437_456106837211652849_n.jpg" />
            <Card.Body style={{ backgroundColor: "white", color: "black" }}>
              <Card.Text>
                <p className="lead"> Keep my fire burning</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card>
            <CardImg src="/assets/pictures/292156708_701059557650333_5102225265466918602_n.jpg" />
            <Card.Body style={{ backgroundColor: "white", color: "black" }}>
              <Card.Text>
                <p className="lead"> Keep my fire burning</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row
        xs={1}
        md={2}
        className="g-4 my-3 animate__animated animate__fadeInLeft animate__slow animate__delay-1s"
      >
        <Col>
          <Card>
            <CardImg src="/assets/pictures/328839262_147776874790758_9146085633862525515_n.jpg" />
            <Card.Body style={{ backgroundColor: "white", color: "black" }}>
              <Card.Text>
                <p className="lead"> Keep my fire burning</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card>
            <CardImg src="/assets/pictures/342915600_955862345858520_5701683983198988364_n.jpg" />
            <Card.Body style={{ backgroundColor: "white", color: "black" }}>
              <Card.Text>
                <p className="lead"> Keep my fire burning</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row
        xs={1}
        md={2}
        className="g-4 my-3 animate__animated animate__fadeInLeft animate__slow animate__delay-1s"
      >
        <Col>
          <Card>
            <CardImg src="/assets/pictures/342916908_247650127757935_3929790852822628287_n.jpg" />
            <Card.Body style={{ backgroundColor: "white", color: "black" }}>
              <Card.Text>
                <p className="lead"> Keep my fire burning</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card>
            <CardImg src="/assets/pictures/343052408_538095341736725_3690333274144230563_n.jpg" />
            <Card.Body style={{ backgroundColor: "white", color: "black" }}>
              <Card.Text>
                <p className="lead"> Keep my fire burning</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default ArtCard;
