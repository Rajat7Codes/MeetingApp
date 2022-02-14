var express = require('express');
var router = express.Router();
var scheduledTimes = require('../services/scheduledTimes.local')

// Choose date page route.
router.get('/', function (req, res) {
  res.send( scheduledTimes.getScheduledJson());
})

module.exports = router;