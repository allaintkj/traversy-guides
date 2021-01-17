const express = require('express');
const router = express.Router();

const { addUser, authUser } = require('../controllers/users');

router.route('/create')
    .post(addUser);

router.route('/auth')
    .post(authUser);

module.exports = router;
