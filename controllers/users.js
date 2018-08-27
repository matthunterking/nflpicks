const User = require('../models/user');

function createPicks(req, res, next) {
  const lock = req.body.filter(pick => pick.lock)[0];
  console.log('this is the lock pick=>', lock);
  User
    .findById(req.currentUser._id)
    .then(user => {
      user.picks = [].concat(...user.picks, req.body);
      console.log(user.picks);
      return user.save();
    })
    .then(user => user.setLock(lock))
    .then(user => res.status(201).json(user))
    .catch(next);
}

function userShow(req, res, next) {
  User
    .findById(req.params.id)
    .populate('picks.gameId picks.winnerPick picks.loserPick leagues favouriteTeam')
    .exec()
    .then(user => {
      // user.leagues.forEach(league => league.updateTable());
      return user;
    })
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
