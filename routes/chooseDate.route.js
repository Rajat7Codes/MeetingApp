var express = require('express');
var router = express.Router();
var scheduledDates = require('../services/scheduledDates.local')

// Choose date page route.
router.get('/', function (req, res) {
  res.send( scheduledDates.getScheduledJson());
})

module.exports = router;