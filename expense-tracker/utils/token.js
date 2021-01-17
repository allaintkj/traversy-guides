const jwt = require('jsonwebtoken');
const config = require('../config/config.json');

exports.genToken = _id => {
    return jwt.sign({ _id }, config.jwt.secret, {
        expiresIn: config.jwt.expiry
    });
};

exports.verifyToken = header => {
    try {
        const token = header.split(' ')[1];
        
        return jwt.verify(token, config.jwt.secret);
    } catch (err) {
        console.log(err);

        return null;
    }
};
