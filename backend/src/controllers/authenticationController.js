const controller = {};
const jwt = require('jsonwebtoken');
const User = require('../models/User');

controller.authenticate = (req, res) => {
  const ttl = 86400;

  User.findOne({ email: req.body.email }, (err, user) => {
    if (err) throw err;
    // @TODO
    if (!user) res.status(401).json({ message: 'Invalid credentials' });

    user.comparePassword(req.body.password, (error, isMatch) => {
      if (error) throw error;
      if (isMatch) {
        const token = jwt.sign({ email: req.body.email, id: user.id }, process.env.TOKEN_SECRET, { expiresIn: `${ttl}s` });
        return res.json({ access_token: token, ttl, user });
      }
      // @TODO
      return res.status(401).json({ message: 'Invalid credentials' });
    });
  });
};

module.exports = controller;
