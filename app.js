const express = require('express');
const dotenv = require('dotenv');
const routes = require('./routes/index');

dotenv.config();
const app = express();
app.use(express.json());

// Use routes
app.use('/api', routes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
