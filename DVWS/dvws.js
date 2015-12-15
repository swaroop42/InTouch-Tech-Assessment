var express = require('express');
var router = express.Router();

require('./lib/routes')(router);

module.exports = router;