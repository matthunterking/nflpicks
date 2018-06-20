const router = require('express').Router();
const fixtures = require('../controllers/fixtures');
const teams = require('../controllers/teams');
const auth = require('../controllers/auth');

router.route('/fixtures')
  .get(fixtures.index);

router.route('/teams')
  .get(teams.index);

router.post('/register', auth.register);
router.post('/login', auth.login);


module.exports = router;
