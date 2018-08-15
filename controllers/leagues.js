const League = require('../models/league');
const User = require('../models/user');

function leagueCreate(req, res, next) {
  req.body.createdBy = { userId: req.currentUser.id.toString() };
  League
    .create(req.body)
    .then(league => {
      league.users.push(req.body.createdBy);
      return league.save();
    })
    .then(league => {
      User
        .findById(req.currentUser._id)
        .then(user => user.updateLeagues(league));
      return league;
    })
    .then(league => res.json(league))
    .catch(next);
}

function leagueIndex(req, res, next) {
  League
    .find()
    .populate('users.userId')
    .then(leagues => {
      leagues.forEach(league => league.updatePositions());
      return leagues;
    })
    .then(leagues => {
      const filteredLeagues = leagues.filter(league =>
        league.users.filter(user =>
          user.userId._id.toString() === req.currentUser.id.toString()).length !== 0);
      res.json(filteredLeagues);
    })
    .catch(next);
}


function leagueShow(req, res, next) {
  League
    .findById(req.params.id)
    .populate('table.user')
    .exec()
    .then(league => res.json(league))
    .catch(next);
}

function leagueJoin(req, res, next) {
  League
    .findById(req.params.id)
    .then(league => {
      if(req.body.code === league.code) {
        league.users.push({ userId: req.currentUser.id.toString() });
        league.save();
      } else {
        return res.status(401).json({ message: 'Unauthorized' });
      }
    })
    .then(league => res.json(league))
    .catch(next);
}

module.exports = {
  index: leagueIndex,
  show: leagueShow,
  create: leagueCreate,
  join: leagueJoin
};
