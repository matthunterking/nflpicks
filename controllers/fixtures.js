const Fixtures = require('../models/fixture');

function fixtureIndex(req, res, next) {
  Fixtures
    .find()
    .exec()
    .then(fixtures => res.json(fixtures))
    .catch(next);
}

module.exports = {
  index: fixtureIndex
};
