const router = require('express').Router();
const fixtures = require('../controllers/fixtures');
const users = require('../controllers/users');
const teams = require('../controllers/teams');
const leagues = require('../controllers/leagues');
const secureRoute = require('../lib/secureRoute');
const auth = require('../controllers/auth');

router.route('/leagues')
  .get(secureRoute, leagues.index)
  .post(secureRoute, leagues.create);

router.route('/leagues/:id')
  .get(leagues.show)
  .post(secureRoute, leagues.join);


router.route('/fixtures')
  .get(fixtures.index);

router.route('/fixtures/picks')
  .post(secureRoute, users.createPicks);

router.route('/fixtures/:id')
  .get(fixtures.show)
  .post(fixtures.result); //add secure route later


router.route('/fixtures/week/:week')
  .get(fixtures.week);

router.route('/users')
  .get(users.index);

router.route('/users/:id')
  .get(users.show);

router.route('/teams')
  .get(teams.index);

router.post('/register', auth.register);
router.post('/login', auth.login);


module.exports = router;
