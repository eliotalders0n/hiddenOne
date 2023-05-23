// import img1 from './../assets/2da4bcaeafb26049bfb890e9419707b7.webp';
// import img2 from './../assets/ac18c0b2997668cf391c334855793dcb.webp';
// import img3 from './../assets/laptop.png';
// import img4 from './../assets/console.png';
// import img5 from './../assets/command.png';
import Layout from "./layout";
import { Container, Card, Row, Col } from "react-bootstrap";

const logo = document.querySelectorAll("#logo path");

for (let i = 0; i < logo.length; i++) {
  //   console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
}

function Home() {
  return (
    <Container
      fluid
      style={{
        padding: "0",
        backgroundImage: 'url("https://images.unsplash.com/photo-1518655048521-f130df041f66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        overflow: "auto",
      }}
    >
      <Layout />
          <svg
            id="logo"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            alt="Pukuta Mwanza"
            viewBox="0 0 originalWidth originalHeight"
          >
            <path
              d="M0.0909119 117V0.636353H39.4091C48.5379 0.636353 56 2.28408 61.7955 5.57953C67.6288 8.83711 71.947 13.25 74.75 18.8182C77.553 24.3864 78.9546 30.5985 78.9546 37.4545C78.9546 44.3106 77.553 50.5417 74.75 56.1477C71.9849 61.7538 67.7046 66.2235 61.9091 69.5568C56.1136 72.8523 48.6894 74.5 39.6364 74.5H11.4545V62H39.1818C45.4318 62 50.4508 60.9204 54.2386 58.7614C58.0265 56.6023 60.7727 53.6856 62.4773 50.0114C64.2197 46.2992 65.0909 42.1136 65.0909 37.4545C65.0909 32.7954 64.2197 28.6288 62.4773 24.9545C60.7727 21.2803 58.0076 18.4015 54.1818 16.3182C50.3561 14.197 45.2803 13.1364 38.9545 13.1364H14.1818V117H0.0909119Z"
              stroke="black"
              strokeWidth="5"
            />
            <path
              d="M178.017 0.636353H192.108V77.6818C192.108 85.6364 190.233 92.7386 186.483 98.9886C182.771 105.201 177.525 110.106 170.744 113.705C163.964 117.265 156.009 119.045 146.881 119.045C137.752 119.045 129.797 117.265 123.017 113.705C116.237 110.106 110.972 105.201 107.222 98.9886C103.509 92.7386 101.653 85.6364 101.653 77.6818V0.636353H115.744V76.5454C115.744 82.2273 116.994 87.2841 119.494 91.7159C121.994 96.1098 125.555 99.5757 130.176 102.114C134.835 104.614 140.403 105.864 146.881 105.864C153.358 105.864 158.926 104.614 163.585 102.114C168.244 99.5757 171.805 96.1098 174.267 91.7159C176.767 87.2841 178.017 82.2273 178.017 76.5454V0.636353Z"
              stroke="black"
              strokeWidth="5"
            />
            <path
              d="M220.247 117V0.636353H234.338V58.3636H235.702L287.974 0.636353H306.384L257.52 53.1364L306.384 117H289.338L248.884 62.9091L234.338 79.2727V117H220.247Z"
              stroke="black"
              strokeWidth="5"
            />
            <path
              d="M400.986 0.636353H415.077V77.6818C415.077 85.6364 413.202 92.7386 409.452 98.9886C405.74 105.201 400.493 110.106 393.713 113.705C386.933 117.265 378.978 119.045 369.849 119.045C360.721 119.045 352.766 117.265 345.986 113.705C339.206 110.106 333.94 105.201 330.19 98.9886C326.478 92.7386 324.622 85.6364 324.622 77.6818V0.636353H338.713V76.5454C338.713 82.2273 339.963 87.2841 342.463 91.7159C344.963 96.1098 348.524 99.5757 353.145 102.114C357.804 104.614 363.372 105.864 369.849 105.864C376.327 105.864 381.895 104.614 386.554 102.114C391.213 99.5757 394.774 96.1098 397.236 91.7159C399.736 87.2841 400.986 82.2273 400.986 76.5454V0.636353Z"
              stroke="black"
              strokeWidth="5"
            />
            <path
              d="M436.852 13.1364V0.636353H524.125V13.1364H487.534V117H473.443V13.1364H436.852Z"
              stroke="black"
              strokeWidth="5"
            />
            <path
              d="M537.051 117H522.278L565.006 0.636353H579.551L622.278 117H607.506L572.733 19.0454H571.824L537.051 117ZM542.506 71.5454H602.051V84.0454H542.506V71.5454Z"
              stroke="black"
              strokeWidth="5"
            />
            <path
              d="M0.0909119 194.636H16.9091L56.4546 291.227H57.8182L97.3636 194.636H114.182V311H101V222.591H99.8636L63.5 311H50.7727L14.4091 222.591H13.2727V311H0.0909119V194.636Z"
              stroke="black"
              strokeWidth="5"
            />
            <path
              d="M163.571 311L131.753 194.636H146.071L170.389 289.409H171.526L196.298 194.636H212.207L236.98 289.409H238.116L262.435 194.636H276.753L244.935 311H230.389L204.707 218.273H203.798L178.116 311H163.571Z"
              stroke="black"
              strokeWidth="5"
            />
            <path
              d="M290.02 311H275.247L317.974 194.636H332.52L375.247 311H360.474L325.702 213.045H324.793L290.02 311ZM295.474 265.545H355.02V278.045H295.474V265.545Z"
              stroke="black"
              strokeWidth="5"
            />
            <path
              d="M485.645 194.636V311H472.009L408.599 219.636H407.463V311H393.372V194.636H407.009L470.645 286.227H471.781V194.636H485.645Z"
              stroke="black"
              strokeWidth="5"
            />
            <path
              d="M509.977 311V300.773L572.705 207.136H509.295V194.636H589.523V204.864L526.796 298.5H590.205V311H509.977Z"
              stroke="black"
              strokeWidth="5"
            />
            <path
              d="M618.614 311H603.841L646.568 194.636H661.114L703.841 311H689.068L654.296 213.045H653.386L618.614 311ZM624.068 265.545H683.614V278.045H624.068V265.545Z"
              stroke="black"
              strokeWidth="5"
            />
          </svg>

      <Container fluid>
      <Col className="my-2 animate__animated animate__fadeIn animate__slow animate__delay-1s">
          <Card style={{ border: "none", background: "none"}}>
            <Card.Body>
              <Card.Text>
                <p className="lead text-muted" style={{fontSize: "1.5rem"}}>
                  "Build a man a fire, and he'll be warm for a day. Set a man on
                  fire, and he'll be warm for the rest of his life."
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Row
          md={2}
          className="d-flex g-2 animate__animated animate__bounceInLeft animate__slow animate__delay-1s"
        >
          <Col className="my-5">
            <Card style={{ border: "none", backgroundColor: "rgba(110,110,110,0.1)"}}>
              <Card.Body>
                <Card.Title>
                  <h3 className="display-3  text-muted">Android iOS Web</h3>
                </Card.Title>
                <Card.Text className="text-muted">
                  All our excuses are valid, All our dreams can be reality.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="my-5">
            <Card style={{ border: "none", backgroundColor: "rgba(110,110,110,0.1)"}}>
              <Card.Body>
                <Card.Title><h3 className="display-3 text-muted">Build Things With Love</h3></Card.Title>
                <Card.Text className="text-muted">Jeremiah 29:11</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row
          md={2}
          className="animate__animated animate__bounceInRight animate__slow animate__delay-2s"
        ></Row>
      </Container>
    </Container>
  );
}

export default Home;
