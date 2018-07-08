const Fixtures = require('../models/fixture');

function fixtureIndex(req, res, next) {
  Fixtures
    .find()
    .populate('homeTeam awayTeam')
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

module.exports = {
  index: fixtureIndex,
  show: fixtureShow,
  week: fixtureIndexByWeek
};
