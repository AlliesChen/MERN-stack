const express = require('express');

// controller functions
const { signupUser, loginUser, logoutUser } = require('../controllers/userController');

const router = express.Router();

// login route
router.post('/login', loginUser);

// logout route
router.get('/logout', logoutUser);

// signup route
router.post('/signup', signupUser);

module.exports = router;
