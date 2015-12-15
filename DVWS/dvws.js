var express = require('express');
var router = express.Router();

require('./lib/routes')(router);

console.log('Data Visualization Web Service (DVWS) Has Started');


module.exports = router;