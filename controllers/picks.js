const User = require('../models/user');

function createPick(req, res, next) {
  User
    .findById(req.currentUser._id)
    .then(user => {
      user.picks.push(req.body);
      return user.save();
    })
    .then(user => res.status(201).json(user))
    .catch(next);
}

module.exports = {
  create: createPick
};
