const User = require('../models/user');

function createPicks(req, res, next) {
  const lock = req.body.filter(pick => pick.lock)[0];
  User
    .findById(req.currentUser._id)
    .then(user => {
      user.picks = [].concat(...user.picks, req.body);
      return user.save();
    })
    .then(user => lock ? user.setLock(lock) : user)
    .then(user => res.status(201).json(user))
    .catch(next);
}

function userShow(req, res, next) {
  User
    .findById(req.params.id)
    .populate('picks.gameId picks.winnerPick picks.loserPick leagues favouriteTeam')
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

function usersEdit(req, res, next) {
  User
    .findById(req.params.id)
    .exec()
    .then(user => {
      if(!user) return res.sendStatus(404);
      return Object.assign(user, req.body);
    })
    .then(user => user.save())
    .then(user => res.json(user))
    .catch(next);
}

module.exports = {
  createPicks: createPicks,
  show: userShow,
  index: usersIndex,
  edit: usersEdit
};
