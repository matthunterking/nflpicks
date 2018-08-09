const User = require('../models/user');

function createPicks(req, res, next) {
  console.log(req.body);
  User
    .findById(req.currentUser._id)
    .then(user => {
      user.picks = [].concat(...user.picks, req.body);
      console.log(user.picks);
      return user.save();
    })
    .then(user => res.status(201).json(user))
    .catch(next);
}

function userShow(req, res, next) {
  User
    .findById(req.params.id)
    .populate('picks.gameId picks.winnerPick picks.loserPick leagues')
    .exec()
    .then(user => res.json(user))
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
  createPicks: createPicks,
  show: userShow,
  index: usersIndex
};
