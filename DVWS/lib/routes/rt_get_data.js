var initRoutes = function (app) {
	app.get('/api/v1/data', getData);
};

var getData = function(req, res){
	var data = {};
	
	data.status = true;
	data.result = 'success';
	
	res.json(data);
};

module.exports = {
	initRoutes: initRoutes
};

