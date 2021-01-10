// const cors = require('cors');
const express = require('express');
const path = require('path');
const connect = require('./config/db');
const config = require('./config/config.json');

// attempt database connection
connect();

// config
const PORT = config.express.port || 5050;
const HOST = config.express.host || 'localhost';

// routes
const transactions = require('./routes/transactions');

// setup express
const app = express();
// app.use(cors());
app.use(express.json());

/* ---------- TRANSACTIONS ROUTES ---------- */
app.use('/api/v1/transactions', transactions);

/* ------------- REACT ROUTES ------------- */
if (config.env === 'production') {
    // serve static assets from build folder
    app.use(express.static('./dist'));
    // send any routes that don't match declared routes to React FE
    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, './dist/index.html')));
}

// start server
app.listen(PORT, HOST, () => console.log(`HTTP server listening on http://${HOST}:${PORT}`));
