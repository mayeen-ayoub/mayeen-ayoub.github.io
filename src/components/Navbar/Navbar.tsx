import {Navbar, Nav, Container, NavDropdown} from 'react-bootstrap';
import { Globals } from '../../global';
import Sun from './images/Sun.svg';
import { FaGithub } from 'react-icons/fa';

export const CustomNavbar = () => {
	return (
    <Navbar bg="light" data-bs-theme="light" fixed="top" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#home">
          <img src={Sun} className="d-inline-block align-top" width="30" height="30"/>
				</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
						<Nav.Link href="#skills">Skills</Nav.Link>
            <NavDropdown title="Contact Me" id="basic-nav-dropdown">
              <NavDropdown.Item href={Globals.RESUME}>
                Resume
              </NavDropdown.Item>
							<NavDropdown.Divider />
              <NavDropdown.Item href={Globals.MAIL_LINK} target="_blank">Email</NavDropdown.Item>  
              <NavDropdown.Item href={Globals.LINKEDIN} target="_blank">Linkedin</NavDropdown.Item>
							<NavDropdown.Item href={Globals.GITHUB} target="_blank">Github</NavDropdown.Item>
							<NavDropdown.Item href={Globals.DEVPOST} target="_blank">Devpost</NavDropdown.Item>            
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
