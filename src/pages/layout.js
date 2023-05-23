import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Layout() {
  return (
    <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: "rgb(220,220,220)" }}>
      <Container>
        <Navbar.Brand href="/"><h5 className='display-5'>PUKUTA .M</h5></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="/profile"><p className='lead'>Jump-In</p></Nav.Link>
            <Nav.Link eventKey={2} href="/details">
            <p className='lead'>Core</p>
            </Nav.Link>
            <Nav.Link eventKey={3} href="/projects">
            <p className='lead'>Projects</p>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Layout;