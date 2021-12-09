import React from 'react';
// Logo has to be made eventually

const Nav = (props) => {
    const tabs = ['About', 'Portfolio', 'Contact', 'Resume'];
// have to work on this part a lot
    return (
        // <header className="flex-row px-1">
        //     <a href="/">
        //         <img className="logoMain"></img>
        //     </a>
        // </header>
        <nav>
        <ul>
            {tabs.map(tab => (
                <li key={tab}>
                    <a
                     href={'#' + tab.toLowerCase()}
                     onClick={() => props.handlePageChange(tab)}
                    >
                    {tab}
                    </a>
                </li>
            ))}
        </ul>
    </nav>
    )
}

export default Nav;
