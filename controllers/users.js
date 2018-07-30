const User = require('../models/user');
const Fixtures = require('../models/fixture');

function createPick(req, res, next) {
  req.body.gameId = req.params.id;
  User
    .findById(req.currentUser._id)
    .then(user => {
      user.picks.push(req.body);
      return user.save();
    })
    .then(user => res.status(201).json(user))
    .catch(next);
}

function calcuateResult(req, res, next) {
  User
    .findById(req.params.id)
    .populate('picks.gameId')
    .then(user => {
      const array = user.picks;
      console.log(array.map(pick => pick.gameId.winner));
      res.json(user.picks);
    })
    .catch(next);
}

function usersIndex(req, res, next) {
  User
    .find()
    .populate('picks.gameId')
    .exec()
    .then(users => res.json(users))
    .catch(next);
}

module.exports = {
  createPick: createPick,
  calcuateResult: calcuateResult,
  index: usersIndex
};
