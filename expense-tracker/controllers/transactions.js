const Transaction = require('../models/Transaction');

exports.getTransactions = async(req, res) => {
    try {
        const transactions = await Transaction.find();

        return res.status(200).json({
            success: true,
            count: transactions.length,
            data: transactions
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
};

exports.addTransaction = async(req, res) => {
    try {
        const transaction = await Transaction.create(req.body);

        return res.status(201).json({
            success: true,
            data: transaction
        });
    } catch (err) {
        if (err.name === 'ValidationError') {
            const messages = Object.values(err.errors).map(field => field.message);

            return res.status(400).json({
                succes: false,
                error: messages
            });
        }

        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
};

exports.deleteTransaction = async(req, res) => {
    try {
        const transaction = await Transaction.findById(req.params.id);

        if (!transaction) {
            return res.status(404).json({
                success: false,
                error: 'No transaction found'
            });
        }

        await transaction.remove();

        return res.status(200).json({
            success: true,
            data: {}
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
};
