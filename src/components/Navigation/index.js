import React from 'react';
import { Col, Navbar, Nav } from 'react-bootstrap';
function Navigation(props) {


const {
    handlePageChange,
    currentPage
} = props;

    return (
        <Col id ="navigationBar">
            <Navbar collapseOnSelect expand='lg'>
                <Navbar.Brand id='nav-brand-id' eventKey="about" onClick={() => handlePageChange('about')}>Sean Murphy</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto" onSelect= {(selectedKey) => handlePageChange(selectedKey)}>
                    <Nav.Link eventKey="about"><span className={currentPage==='about' ? 'activeSection' : 'inactiveSection'}>About Me</span></Nav.Link>
                    <Nav.Link eventKey="portfolio"><span data-testid="portfolio-nav-item" className={currentPage==='portfolio' ? 'activeSection' : 'inactiveSection'}>Portfolio</span></Nav.Link>
                    <Nav.Link eventKey="contact"><span className={currentPage==='contact' ? 'activeSection' : 'inactiveSection'}>Contact</span></Nav.Link>
                    <Nav.Link eventKey="resume"><span className={currentPage==='resume' ? 'activeSection' : 'inactiveSection'}>Resume</span></Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Col>
    )
}

export default Navigation;
