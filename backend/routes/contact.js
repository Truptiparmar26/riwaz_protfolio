const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const rateLimit = require('express-rate-limit');
const { submitContactForm } = require('../controllers/contactController');

// Rate limiting specifically for contact form to prevent spam
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // Limit each IP to 5 requests per `window` (here, per 15 minutes)
  message: { success: false, message: 'Too many requests, please try again later.' },
  standardHeaders: true,
  legacyHeaders: false,
});

// @route   POST /api/v1/contact
// @desc    Submit contact form and send email
// @access  Public
router.post(
  '/',
  contactLimiter,
  [
    check('name', 'Name is required').trim().not().isEmpty().escape(),
    check('email', 'Please include a valid email').isEmail().normalizeEmail(),
    check('phone', 'Please include a valid phone number').optional({ checkFalsy: true }).isMobilePhone().withMessage('Invalid phone format').escape(),
    check('subject', 'Subject is required').trim().not().isEmpty().escape(),
    check('message', 'Message is required').trim().not().isEmpty().escape(),
  ],
  submitContactForm
);

module.exports = router;
