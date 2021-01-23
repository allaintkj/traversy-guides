const jwt = require('jsonwebtoken');
const config = require('../config/config.json');

exports.genToken = _id => {
    return jwt.sign({ _id }, config.jwt.secret, {
        expiresIn: config.jwt.expiry
    });
};

exports.verifyToken = (header, _id) => {
    try {
        // get token header
        const token = header.split(' ')[1];
        // get base64 payload
        const payload = token.split('.')[1];
        // decode payload
        const decodedPayload = JSON.parse(Buffer.from(payload, 'base64').toString());

        // check payload against provided id
        if (decodedPayload._id !== _id) { return null; }
        
        return jwt.verify(token, config.jwt.secret);
    } catch (err) {
        console.log(err);

        return null;
    }
};
