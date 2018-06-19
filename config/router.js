const router = require('express').Router();
const fixtures = require('../controllers/fixtures');

router.route('/fixtures')
  .get(fixtures.index);


module.exports = router;
