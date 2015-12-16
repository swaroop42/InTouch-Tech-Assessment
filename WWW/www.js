/* global __dirname */
var express = require('express');
var router = express.Router();

router.use("/global", express.static(__dirname + '/bin/feat/growth'));
router.use("/revenue", express.static(__dirname + '/bin/feat/revenue'));

require('./lib/routes')(router);

module.exports = router;