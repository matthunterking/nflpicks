const Teams = require('../models/team');

function teamsIndex(req, res, next) {
  Teams
    .find()
    .exec()
    .then(fixtures => res.json(fixtures))
    .catch(next);
}

module.exports = {
  index: teamsIndex
};
