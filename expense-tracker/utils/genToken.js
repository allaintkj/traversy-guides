const jwt = require('jsonwebtoken');
const config = require('../config/config.json');

exports.genToken = _id => {
    return jwt.sign({ _id }, config.jwt.secret, {
        expiresIn: config.jwt.expiry
    });
};
