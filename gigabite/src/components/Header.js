import React from 'react';
import './Header.css';

function Header({ toggleSidebar }) {
    return (
        <header className='header'>
            <button onClick={toggleSidebar} className='sidebar-toggle'>
            </button>
        </header>
    )
}

