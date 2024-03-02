import React from 'react';
import './Sort.css'; // Import the CSS file

export default function Sort({ onSort }) {
    const handleChange = (e) => {
        const { value } = e.target;
        const [sortBy, sortOrder] = value.split('_');
        onSort(sortBy, sortOrder);
    };

    return (
        <select className="sort-select" onChange={handleChange}>
            <option value="date_asc">Date (Ascending)</option>
            <option value="date_desc">Date (Descending)</option>
            {/* Add more options for sorting by different columns */}
        </select>
    );
}
