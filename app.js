var express = require('express');
var bodyParser = require('body-parser');
var http = require('http');
var config = require('./config.js');

var app = exports.app = express();

var server = null;

server = http.createServer(app);

server.listen(config.dvws.port, function(){
	console.log('Data Visualization Web Service (DVWS) Has Started On Port', config.dvws.port);
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.all("/*", function (req, res, next) {
	// headers
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Methods", "GET");
	
	// Set custom headers 
	res.header("Access-Control-Allow-Headers", "Content-type");
	if (req.method == "OPTIONS") {
		res.status(200).end();
	} else {
		next();
	}
});

app.get('/api/v1/*', function(req, res, next) {
	res.setHeader('Cache-Control', 'no-cache');
	next();
});

var dvws = require('./DVWS/dvws.js');

app.use('/', [dvws]);

//Case: No match for route, ERROR: 404
app.use(function(err, req, res, next){
	err = err || new Error('NOT Found');
	err.status = 404;
	next(err);
});




