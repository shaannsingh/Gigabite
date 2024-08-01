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
            <form onSubmit={handleSearch}>
                <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Show me what you got, I don't gigabite."
                />
                <button type="cook">cook</button>
            </form>
        </div>
    );
}

export default HomePage;