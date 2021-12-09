import React from 'react';
import Nav from '../Nav'


const Header = (props) => {

    return (
        <header>
        <Nav handlePageChange={props.handlePageChange}/>
        </header>
    )
}

export default Header