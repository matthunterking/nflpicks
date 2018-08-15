const Fixtures = require('../models/fixture');
const User = require('../models/user');

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
  console.log('in fixture results');
  Fixtures
    .findById(req.params.id)
    .populate('homeTeam awayTeam')
    .then(fixture => {
      fixture.winner = req.body.winner;
      fixture.loser = req.body.loser;
      return fixture.save();
    })
    .then(fixture => {
      console.log('this is the fixture later in results',fixture);
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
    .then(fixture => res.json(fixture))
    .catch(next);
}


module.exports = {
  index: fixtureIndex,
  show: fixtureShow,
  week: fixtureIndexByWeek,
  result: fixtureResult
};
