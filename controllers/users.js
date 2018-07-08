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

// function pickIndex(req, res, next) {
//   User
//     .findById(req.params.id)
//     .then(user => {
//       res.json(user);
//     })
//     .catch(next);
// }

function usersIndex(req, res, next) {
  User
    .find()
    .exec()
    .then(users => res.json(users))
    .catch(next);
}

module.exports = {
  create: createPick,
  // pickIndex: pickIndex,
  index: usersIndex
};
