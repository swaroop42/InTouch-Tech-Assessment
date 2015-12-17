var growth_logic = require('../logic/growth_logic.js');

var initRoutes = function (app) {
	//This route returns average growth by sector
	app.get('/api/v1/growth', getGrowthBySector);
};

var getGrowthBySector = function(req, res){
	growth_logic.getGrowthBySector(req, function(data){
		res.json(data);
	});	
};

module.exports = {
	initRoutes: initRoutes
};

