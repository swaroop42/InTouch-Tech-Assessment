var growth_logic = require('../logic/growth_logic.js');

var initRoutes = function (app) {
	//This route returns average growth by sector
	app.get('/api/v1/growth', getGrowthBySector);
};

var getGrowthBySector = function(req, res){
	console.log('DVWS Received Request GET: ', req.originalUrl);
	growth_logic.getGrowthBySector(req, res);
};

module.exports = {
	initRoutes: initRoutes
};
