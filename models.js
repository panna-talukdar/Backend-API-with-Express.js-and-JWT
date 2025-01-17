// This is just a placeholder model for future database implementation.
const mongoose = require('mongoose');

const exampleSchema = new mongoose.Schema({
  name: { type: String, required: true },
});

module.exports = mongoose.model('Example', exampleSchema);
