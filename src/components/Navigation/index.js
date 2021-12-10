import React from 'react';
import { Col, Navbar, Nav } from 'react-bootstrap';
function Navigation(props) {


const {
    handlePageChange,
    currentPage
} = props;

    return (
        <Col id ="navigation-bar">
            <Navbar collapseOnSelect expand='med'>
                <Navbar.Brand eventKey="about" onClick={() => handlePageChange('about')}>Sean Murphy</Navbar.Brand>
                    <Nav className="setPage" onSelect= {(selectedPage) => handlePageChange(selectedPage)}>
                    <Nav.Link eventKey="about"><span className={currentPage==='about' ? 'activeSection' : 'inactiveSection'}>About Me</span></Nav.Link>
                    <Nav.Link eventKey="portfolio"><span data-testid="portfolio-nav-item" className={currentPage==='portfolio' ? 'activeSection' : 'inactiveSection'}>Portfolio</span></Nav.Link>
                    <Nav.Link eventKey="contact"><span className={currentPage==='contact' ? 'activeSection' : 'inactiveSection'}>Contact</span></Nav.Link>
                    <Nav.Link eventKey="resume"><span className={currentPage==='resume' ? 'activeSection' : 'inactiveSection'}>Resume</span></Nav.Link>
                </Nav>
            </Navbar>
        </Col>
    )

//     const tabs = ['About', 'Portfolio', 'Contact', 'Resume'];
// // // have to work on this part a lot
// // <a href="/">
// //             <img className="logoMain"></img>
// //             </a>
    
//     return (
//         <nav className="flex-row px-1">
//             <div className='nav-wrapper'>
//             <h1 className='right-hide'></h1>
        
        
//         <ul className="right">
//             {tabs.map(tab => (
//                 <li key={tab}>
//                     <a
//                      href={'#' + tab.toLowerCase()}
//                      onClick={() => props.handlePageChange(tab)}
//                     >
//                     {tab}
//                     </a>
//                 </li>
//             ))}
//         </ul>
//     </div>
//     </nav>
//     )
}

export default Navigation;
