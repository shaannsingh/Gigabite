import React from 'react';
import './Header.css';

function Header({ toggleSidebar }) {
    return (
        <header className='header'>
            <button onClick={toggleSidebar} className='sidebar-toggle'>
            </button>
            <nav>
                <button>meals</button>
                <button>plans</button>
                <button>calories</button>
            </nav>
            <h1></h1>
        </header>
    );
}

export default Header;

