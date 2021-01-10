exports.getTransactions = (req, res) => {
    res.send('GET transactions');
};

exports.addTransaction = (req, res) => {
    res.send('POST transactions');
};

exports.deleteTransaction = (req, res) => {
    res.send('DELETE transactions');
};
