const Fixtures = require('../models/fixture');

function fixtureIndex(req, res, next) {
  Fixtures
    .find()
    .populate('homeTeam awayTeam')
    .exec()
    .then(fixtures => res.json(fixtures))
    .catch(next);
}

module.exports = {
  index: fixtureIndex
};
