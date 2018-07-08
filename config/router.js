const router = require('express').Router();
const fixtures = require('../controllers/fixtures');
const users = require('../controllers/users');
const teams = require('../controllers/teams');
const secureRoute = require('../lib/secureRoute');
const auth = require('../controllers/auth');

router.route('/fixtures')
  .get(fixtures.index);

router.route('/fixtures/:id')
  .get(fixtures.show);

router.route('/fixtures/:id/pick')
  .post(secureRoute, users.create);

router.route('/fixtures/week/:week')
  .get(fixtures.week)
  .post(secureRoute, fixtures.result);

router.route('/users')
  .get(users.index);

router.route('/users/:id')
  .get(users.pickIndex);

router.route('/teams')
  .get(teams.index);

router.post('/register', auth.register);
router.post('/login', auth.login);


module.exports = router;
