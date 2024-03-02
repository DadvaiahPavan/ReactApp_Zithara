import React, { useState } from 'react';
import './Search.css'; // Import the CSS file

export default function Search({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(searchTerm);
    };

    return (
        <div className="search-container">
            <form onSubmit={handleSubmit}>
                <input
                    className="search-input"
                    type="text"
                    placeholder="Search by name or location"
                    value={searchTerm}
                    onChange={handleChange}
                />
                <button className="search-button" type="submit">Search</button>
            </form>
        </div>
    );
}
