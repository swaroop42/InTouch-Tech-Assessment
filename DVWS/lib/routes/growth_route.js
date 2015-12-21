var growth_logic = require('../logic/growth_logic.js');

var initRoutes = function (app) {
	//This route returns average growth for following sectors Health, Energy, IT Services, Engineering, Government Services, Financial Services
	app.get('/api/v1/growth/average_growth', getAvgGrowthPerIndustry);
	
	//This route returns information of a company with highest growth in a state of users choice  
	//Pass state abbreviation as parameter
	app.get('/api/v1/growth/highest_growth/:state', getCompanyInfoForState);
};

var getAvgGrowthPerIndustry = function(req, res){
	console.log('DVWS Received Request GET: ', req.originalUrl);
	growth_logic.getAvgGrowthPerIndustry(req, res);
};

var getCompanyInfoForState = function(req, res){
	console.log('DVWS Received Request GET: ', req.originalUrl);
	growth_logic.getCompanyInfoForState(req, res);
}
module.exports = {
	initRoutes: initRoutes
};
