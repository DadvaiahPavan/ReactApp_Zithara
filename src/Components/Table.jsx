import React from 'react';
import './Table.css'; // Import the CSS file

const Table = ({ customers }) => {
    return (
        <div className="container">
            <div className="table-responsive">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Sno</th>
                            <th>Customer Name</th>
                            <th>Age</th>
                            <th>Phone</th>
                            <th>Location</th>
                            <th>Date</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {customers.map(customer => (
                            <tr key={customer.sno}>
                                <td>{customer.sno}</td>
                                <td>{customer.customer_name}</td>
                                <td>{customer.customer_age}</td>
                                <td>{customer.customer_phn}</td>
                                <td>{customer.customer_location}</td>
                                <td>{customer.date}</td>
                                <td>{customer.time}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Table;
