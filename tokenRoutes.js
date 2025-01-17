const express = require('express');
const { generateToken } = require('../controllers/tokenController');

const router = express.Router();

router.get('/', generateToken);

module.exports = router;
