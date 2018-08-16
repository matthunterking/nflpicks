const User = require('../models/user');
const jwt = require('jsonwebtoken');
const { secret } = require('../config/environment');

function register(req, res, next) {
  console.log('this is the req.body in register', req.body);
  User
    .create(req.body)
    .then(user => {
      const token = jwt.sign({ sub: user._id }, secret, { expiresIn: '6h' });
      res.json({
        message: `Thanks for registering ${user.name}!`,
        token,
        user
      });
    })
    .catch(next);
}

function login(req, res, next) {
  console.log('in log in', req.body);
  User
    .findOne({ email: req.body.email })
    .then(user => {
      if(!user || !user.validatePassword(req.body.password)) {
        return res.status(401).json({ message: 'Unauthorized' });
      }

      const token = jwt.sign({ sub: user._id }, secret, { expiresIn: '6h' });
      res.json({
        message: `Welcome back ${user.username}!`,
        token,
        user
      });
    })
    .catch(next);
}

module.exports = {
  register,
  login
};
