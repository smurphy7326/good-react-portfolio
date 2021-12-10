import React from 'react';
import { Row } from 'react-bootstrap';
import Navigation from '../Navigation'

function Header ({ currentPage, handlePageChange }) {

    return(
        <Row data-testid='header-row' id='header'>
        <Navigation handlePageChange={handlePageChange} currentPage={currentPage}/>
        </Row>
    )
}

export default Header