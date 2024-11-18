import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function EvoNav(){
  return(
      <><Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">The Evolution Archive</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#contact">Contact Us</Nav.Link>
          <Nav.Link href="#signIn">Sign in</Nav.Link>
        </Nav>
      </Container>
    </Navbar><br /></>
 )
}
export default EvoNav; 