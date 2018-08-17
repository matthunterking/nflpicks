const Fixtures = require('../models/fixture');
const User = require('../models/user');
const Team = require('../models/team');

function fixtureIndex(req, res, next) {
  Fixtures
    .find()
    .populate('homeTeam awayTeam winner')
    .exec()
    .then(fixtures => res.json(fixtures))
    .catch(next);
}

function fixtureShow(req, res, next) {
  Fixtures
    .findById(req.params.id)
    .populate('homeTeam awayTeam')
    .exec()
    .then(fixture => {
      if(!fixture) return res.sendStatus(404);
      res.json(fixture);
    })
    .catch(next);
}

function fixtureIndexByWeek(req, res, next) {
  Fixtures
    .find({ week: req.params.week })
    .populate('homeTeam awayTeam')
    .then(fixtures => res.json(fixtures))
    .catch(next);
}

function fixtureResult(req, res, next) {
  Fixtures
    .findById(req.params.id)
    .populate('homeTeam awayTeam')
    .then(fixture => {
      fixture.winner = req.body.winner;
      fixture.loser = req.body.loser;
      fixture.tie = false;
      return fixture.save();
    })
    .then(fixture => {
      User
        .find()
        .then(users => {
          users.forEach(user => {
            user.checkPicks(fixture);
            user.totalScore();
          });
        });
      return fixture;
    })
    .then(fixture => {
      Team
        .find()
        .then(teams => {
          teams.forEach(team => {
            team.updateRecord(fixture);
          });
        });
      return fixture;
    })
    .then(fixture => res.json(fixture))
    .catch(next);
}


module.exports = {
  index: fixtureIndex,
  show: fixtureShow,
  week: fixtureIndexByWeek,
  result: fixtureResult
};
