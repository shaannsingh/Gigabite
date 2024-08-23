import React, { useState } from 'react';
import './HomePage.css';

function HomePage({ isSideBarOpen }) {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim() !== '') {
            console.log("Search query:", searchQuery);
            // Here you can handle the search query as needed
            setSearchQuery('');
        }
    };

    return (
        <div className={`home-page ${isSideBarOpen ? 'sidebar-open' : ''}`}>
            <h2>gigabite.</h2>
            <div className="button-container">
                <button className="home-button">i have eggs and some heavy cream.</button>
                <button className="home-button">make me a sundowner cheese board.</button>
                <button className="home-button">let's try a healty, sugar-free oats desert.</button>
            </div>
            <form onSubmit={handleSearch}>
                <div className="input-container">
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Show me what you got, I don't gigabite."
                    />
                    <button type="submit" className="search-button" aria-label="Search">
                        ➤
                    </button>
                </div>
            </form>
        </div>
    );
}

export default HomePage;