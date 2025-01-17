const express = require('express');
const { respondPostBody } = require('../controllers/postController');

const router = express.Router();

router.post('/', respondPostBody);

module.exports = router;
