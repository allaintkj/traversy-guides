const express = require('express');
const router = express.Router();

const { addTransaction, deleteTransaction, getTransactions } = require('../controllers/transactions');

router.route('/')
    .post(addTransaction);

router.route('/:id')
    .get(getTransactions)
    .delete(deleteTransaction);

module.exports = router;
