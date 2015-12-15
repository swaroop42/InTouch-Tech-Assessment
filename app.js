var express = require('express');
var bodyParser = require('body-parser');
var http = require('http');
var config = require('./config.js');

var app = exports.app = express();

var server = null;

server = http.createServer(app);

server.listen(config.dvws.port, function(){
	console.log('Data Visualization Web Service (DVWS) Has Started on Port', config.dvws.port);
});


