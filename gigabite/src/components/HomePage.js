import React, { useState } from 'react';
import './HomePage.css';

function HomePage() {
    const [searchQuery, setSearchQuery] = useState('');
    const handleSearch = (e) => {
        e.preventDefault();
        console.log('Searching for:', searchQuery);
    };

    return (
        <div className='home-page'>
            <h2>gigabite.</h2>
            <div className="dish-loop">
            </div>
            <form onSubmit={handleSearch}>
                <div className="input-container">
                    <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Show me what you got, I don't gigabite."/>
                <button type="search" className="search-button" aria-label="Search">
                    ➤
                    </button>
                </div>
            </form>
         </div>
    );
}

export default HomePage;