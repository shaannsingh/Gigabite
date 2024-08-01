import React from 'react';
import './Header.css';

function Header({ toggleSidebar }) {
    return (
        <header className='header'>
            <button onClick={toggleSidebar} 
            className='sidebar-toggle' 
            aria-label="Toggle sidebar">
            ☰
            </button>
            <nav>
                <button>meals</button>
                <button>plans</button>
                <button>calories</button>
            </nav>
        </header>
    );
}

export default Header;

