const express = require('express');
const router = express.Router();
const { login, register, getProfile } = require('../controllers/authController');
const { protect } = require('../middlewares/auth');

router.post('/login', login);
router.post('/register', register);
router.get('/profile', protect, getProfile);

module.exports = router;
