const express = require('express');
const helloRoutes = require('./helloRoutes');
const tokenRoutes = require('./tokenRoutes');
const postRoutes = require('./postRoutes');

const router = express.Router();

// Route definitions
router.use('/hello', helloRoutes);
router.use('/token', tokenRoutes);
router.use('/post', postRoutes);

module.exports = router;
