const User = require('../models/user');

function createPick(req, res, next) {
  User
    .findById(req.params.id)
    .then(user => {
      user.picks.push(req.body);
      user.save();
    })
    .then(user => res.json(user))
    .catch(next);
}

module.exports = {
  create: createPick
};
