const cors = require('cors');
const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 5050;
const HOST = process.env.HOST || 'localhost';

const app = express();

app.use(cors());
app.use(express.static(path.resolve(__dirname, './dist')));

/* ---------- REACT ROUTES ---------- */
app.get('*', (req, res) => {
    // let react take care of routing these
    res.sendFile(path.resolve(__dirname, '../dist/index.html'));
});

app.listen(PORT, HOST, () => console.log(`HTTP server listening on http://${HOST}:${PORT}`));
