const bcrypt = require('bcrypt');
const { genToken } = require('../utils/genToken');

const User = require('../models/User');

exports.addUser = async(req, res) => {
    const { name, password } = req.body;

    try {
        // check for existing username
        const user = await User.findOne({name: name});

        // return error if found
        if (user) {
            return res.status(400).json({
                success: false,
                error: 'Username is taken.'
            });
        } else if (password.length < 8) {
            return res.status(400).json({
                success: false,
                error: 'Password must be at least 8 characters.'
            });
        }

        // add user if username is not taken
        // hash password
        const hash = await bcrypt.hash(password, 10);

        // add _id, username, hashed pass
        const newUser = await User.create({
            name: name,
            password: hash
        });

        // return success
        return res.status(200).json({
            success: true,
            data: {
                _id: newUser._id,
                name: newUser.name,
                token: genToken(newUser._id)
            }
        });
    } catch (err) {
        console.log(err);

        if (err.name === 'ValidationError') {
            const messages = Object.values(err.errors).map(field => field.message);

            return res.status(400).json({
                success: false,
                error: messages
            });
        }

        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
};

exports.authUser = async(req, res) => {
    const { name, password } = req.body;

    try {
        // check for username, return error if not found
        const user = await User.findOne({name: name});

        if (!user) {
            return res.status(400).json({
                success: false,
                error: 'Username does not exist.'
            });
        }

        // hash password and test against stored value
        if (user && (await bcrypt.compare(password, user.password))) {
            // if match return success with token
            return res.status(200).json({
                success: true,
                data: {
                    _id: user._id,
                    name: user.name,
                    token: genToken(user._id)
                }
            });
        }

        // return error if invalid
        return res.status(401).json({
            success: false,
            error: 'Incorrect password.'
        });
    } catch (err) {
        console.log(err);

        if (err.name === 'ValidationError') {
            const messages = Object.values(err.errors).map(field => field.message);

            return res.status(400).json({
                success: false,
                error: messages
            });
        }

        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
};
