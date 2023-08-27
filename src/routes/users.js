const express = require('express');
const { about, contact, music } = require('../controllers/usersController');
const router = express.Router();

/* GET /users listing. */
router
    .get('/about', about)
    .get('/contact', contact)
    .get('/music', music);

module.exports = router;
