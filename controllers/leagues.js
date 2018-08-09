const League = require('../models/league');
const User = require('../models/user');

function leagueCreate(req, res, next) {
  req.body.members = [req.currentUser._id.toString()];
  League
    .create(req.body)
    .then(league => {
      User
        .findById(req.currentUser._id)
        .then(user => user.updateLeagues(league));
      return league;
    })
    .then(league => res.json(league))
    .catch(next);
}

function leagueShow(req, res, next) {
  League
    .findById(req.params.id)
    .populate('members')
    .exec()
    .then(league => res.json(league))
    .catch(next);
}

function leagueJoin(req, res, next) {
  League
    .findById(req.params.id)
    .then(league => {
      if(req.body.code === league.code) {
        league.members.push(req.currentUser);
      } else {
        return res.status(401).json({ message: 'Unauthorized' });
      }
    })
    .then(league => league.save())
    .then(league => res.json(league))
    .catch(next);
}

module.exports = {
  show: leagueShow,
  create: leagueCreate,
  join: leagueJoin
};
