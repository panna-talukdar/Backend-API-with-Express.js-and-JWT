const jwt = require('jsonwebtoken');

exports.generateToken = (req, res) => {
  const payload = { user: 'testUser' };
  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
  res.status(200).json({ token });
};
