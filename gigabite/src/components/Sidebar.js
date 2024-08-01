import React from 'react';
import './Sidebar.css';

function Sidebar({ isOpen }) {
    return (
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
            <h2>MENU</h2>
                <ul>
                    <li>gigabite</li>
                    <li>about</li>
                    <li>roadmap</li>
                    <li>help</li>
                </ul>
        </div>
    );
}

export default Sidebar;