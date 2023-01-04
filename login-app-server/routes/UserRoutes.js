const express = require('express');
const { loginUser, signupUser } = require('../api/userApi');

const router = express.Router()

router.post('/login', loginUser)

router.post('/signup', signupUser)

module.exports = router;