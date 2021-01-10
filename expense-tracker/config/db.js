const mongoose = require('mongoose');
const config = require('./config.json');

const connect = async() => {
    try {
        const conn = await mongoose.connect(config.mongo.uri, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true
        });

        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};

module.exports = connect;
