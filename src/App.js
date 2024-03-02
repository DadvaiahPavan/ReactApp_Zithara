import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Pagination from "./Components/Pagination.jsx"
import Search from "./Components/Search.jsx"
import Sort from "./Components/Sort.jsx"
import Table from "./Components/Table.jsx"

function App() {
    const [customers, setCustomers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [sortBy, setSortBy] = useState('date');
    const [sortOrder, setSortOrder] = useState('asc');

    useEffect(() => {
        fetchData();
    }, [searchTerm, currentPage, sortBy, sortOrder]);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:3001/api/customers', {
                params: { searchTerm, sortBy, sortOrder, page: currentPage }
            });
            setCustomers(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleSearch = (term) => {
        setSearchTerm(term);
        // You don't need to manually fetch data here
        // The useEffect hook will automatically refetch data when searchTerm changes
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleSortChange = (sortByColumn, sortOrder) => {
        setSortBy(sortByColumn);
        setSortOrder(sortOrder);
    };

    return (
        <div className="App">
            <h1 style={{ fontFamily: 'Arial, sans-serif' }}>Customer Data</h1>
            <Search onSearch={handleSearch} />
            <Sort onSort={handleSortChange} />
            <Table customers={customers} />
            <Pagination currentPage={currentPage} onPageChange={handlePageChange} />
        </div>
    );
}

export default App;
