import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import {Link} from "react-router-dom";

const NavbarPage = (props) => {
    
    return(<div>
            <Navbar expand="md" variant="dark" style={{padding:"3%"}}>
                <Container>
                <Navbar.Brand as={Link} to="/" className="portfolio--title">Alejandro Garcia</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" >
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to="/" className="navLink">Home</Nav.Link>
                            <Nav.Link as={Link} to="/education" className="navLink">Education</Nav.Link>
                            <Nav.Link as={Link} to="/projects" className="navLink">Contact</Nav.Link>
                            <Nav.Link as={Link} to="/projects" className="navLink">Projects</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavbarPage;