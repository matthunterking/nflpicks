const router = require('express').Router();
const fixtures = require('../controllers/fixtures');
const teams = require('../controllers/teams');

router.route('/fixtures')
  .get(fixtures.index);

router.route('/teams')
  .get(teams.index);


module.exports = router;
