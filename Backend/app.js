// server.js
const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
const port = 3001;

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'pavan@2002',
    port: 5432
});

// Use cors middleware
app.use(cors());
 
app.use(express.json());

app.get('/api/customers', async (req, res) => {
    try {
        const { searchTerm, sortBy, sortOrder, page } = req.query;
        const offset = (parseInt(page, 10) - 1) * 20; // Assuming 20 records per page

        let query = `
        SELECT sno, customer_name, customer_age, customer_phn, customer_location, 
        DATE(created_at) as date, 
        TO_CHAR(created_at, 'HH:MI:SS AM') as time
        FROM customer_information
        WHERE customer_name ILIKE $1 OR customer_location ILIKE $1
        ORDER BY $2 ${sortOrder}
        LIMIT 20 OFFSET $3;
        `;

        const { rows } = await pool.query(query, [`%${searchTerm}%`, sortBy, offset]);
        res.json(rows);
    } catch (error) {
        console.error('Error fetching customers:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

