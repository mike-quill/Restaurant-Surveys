var express = require('express');
var router = express.Router();

/* GET all restaurants. */
router.get('/', function(req, res, next) {
  res.send('get all restaurants, this is a test');
});

module.exports = router;
