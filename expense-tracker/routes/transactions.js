const express = require('express');
const router = express.Router();

const { addTransaction, deleteTransaction, getTransactions } = require('../controllers/transactions');

router.route('/')
    .get(getTransactions)
    .post(addTransaction);

router.route('/:id')
    .delete(deleteTransaction);

module.exports = router;
