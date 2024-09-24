'use client';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function BarraNavegacao() {
    return (
        <Navbar expand="lg" bg="light" data-bs-theme="light"> 
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Séries" id="series-dropdown"> {/* Mudança na ordem */}
                            <NavDropdown.Item href="/Series">Populares</NavDropdown.Item>
                            <NavDropdown.Item href="/Series/NO-AR-HOJE">no ar hoje</NavDropdown.Item>
                            <NavDropdown.Item href="/Series/NO-AR">no ar</NavDropdown.Item>
                            <NavDropdown.Item href="/Series/AVALIADO">Avaliadas</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
