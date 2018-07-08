const router = require('express').Router();
const fixtures = require('../controllers/fixtures');
const picks = require('../controllers/picks');
const teams = require('../controllers/teams');
const secureRoute = require('../lib/secureRoute');
const auth = require('../controllers/auth');

router.route('/fixtures')
  .get(fixtures.index);

router.route('/fixtures/:id')
  .get(fixtures.show);

router.route('/fixtures/:id/pick')
  .post(secureRoute, picks.create);

router.route('/fixtures/week/:week')
  .get(fixtures.week);

router.route('/teams')
  .get(teams.index);

router.post('/register', auth.register);
router.post('/login', auth.login);


module.exports = router;
