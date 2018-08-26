const jwt = require('jsonwebtoken');
const { secret } = require('../config/environment');
const Promise = require('bluebird');
const User = require('../models/user');

function adminSecureRoute(req, res, next) {
  if(!req.headers.authorization) return res.status(401).json({ message: 'Unauthorized' });

  const token = req.headers.authorization.replace('Bearer ', '');

  new Promise((resolve, reject) => {
    jwt.verify(token, secret, (err, payload) => {
      if(err) return reject(err);
      resolve(payload);
    });
  })
    .then(payload => User.findById(payload.sub))
    .then(user => {
      if(!user.admin || user.email !== 'matthew85king@gmail.com') return  res.status(401).json({ message: 'Unauthorized' });
      if(!user) return res.status(401).json({ message: 'Unauthorized' });
      req.currentUser = user;
      next();
    })
    .catch(next);
}

module.exports = adminSecureRoute;
