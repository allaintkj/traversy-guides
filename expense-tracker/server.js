const cors = require('cors');
const express = require('express');

// config
const PORT = process.env.PORT || 5050;
const HOST = process.env.HOST || 'localhost';

// routes
const transactions = require('./routes/transactions');

const app = express();
app.use(cors());

/* ---------- TRANSACTIONS ROUTES ---------- */
app.use('/api/v1/transactions', transactions);

// start server
app.listen(PORT, HOST, () => console.log(`HTTP server listening on http://${HOST}:${PORT}`));
