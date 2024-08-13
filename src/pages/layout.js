import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Layout() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      style={{ backgroundColor: "rgba(110,110,110, 0.2)" }}
    >
      <Container>
        <Navbar.Brand href="/">
          <h5 className="display-3"></h5>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav>
            <Nav.Link eventKey={2} href="/details">
              <h3 className="lead" style={{ color: "#777777" }}>
                <strong>Proficiencies</strong>
              </h3>
            </Nav.Link>
            <Nav.Link eventKey={3} href="/projects">
              <h3 className="lead" style={{ color: "#777777" }}>
                {" "}
                <strong>Endeavors</strong>{" "}
              </h3>
            </Nav.Link>
            <Nav.Link eventKey={4} href="/games">
              <h3 className="lead" style={{ color: "#777777" }}>
                {" "}
                <strong>Ludology</strong>{" "}
              </h3>
            </Nav.Link>
            <Nav.Link eventKey={5} href="/art">
              <h3 className="lead" style={{ color: "#777777" }}>
                {" "}
                <strong>Aesthetics</strong>{" "}
              </h3>
            </Nav.Link>
            <Nav.Link href="/profile">
              <h3 className="lead" style={{ color: "#777777" }}>
                {" "}
                <strong>Implements</strong>{" "}
              </h3>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Layout;
