const cors = require('cors');
const express = require('express');
const connect = require('./config/db');

// attempt database connection
connect();

// config
const PORT = process.env.PORT || 5050;
const HOST = process.env.HOST || 'localhost';

// routes
const transactions = require('./routes/transactions');

const app = express();
app.use(cors());
app.use(express.json());

/* ---------- TRANSACTIONS ROUTES ---------- */
app.use('/api/v1/transactions', transactions);

// start server
app.listen(PORT, HOST, () => console.log(`HTTP server listening on http://${HOST}:${PORT}`));
