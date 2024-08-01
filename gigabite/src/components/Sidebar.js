import React from 'react';
import './Sidebar.css';

function Sidebar({ isOpen, onClose }) {
    return (
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
            <button className="sidebar-toggle" 
            onClick={onClose} 
            aria-label={isOpen ? "Close sidebar" : "Open sidebar"}>
                <div className="hamburger-icon">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </button>
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