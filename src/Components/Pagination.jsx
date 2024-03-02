import React from 'react';
import './Pagination.css'; // Import the CSS file

export default function Pagination({ currentPage, onPageChange }) {
    const handlePageChange = (page) => {
        onPageChange(page);
    };

    return (
        <div className="pagination-container">
            <button 
                className="pagination-button"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
            >
                Previous
            </button>
            <span className="pagination-text">Page {currentPage}</span>
            <button 
                className="pagination-button"
                onClick={() => handlePageChange(currentPage + 1)}
            >
                Next
            </button>
        </div>
    );
}
