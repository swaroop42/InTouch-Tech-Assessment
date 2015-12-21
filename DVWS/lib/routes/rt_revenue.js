var revenue_logic = require('../logic/revenue_logic.js');

var initRoutes = function (app) {
	//This route returns information of a company with highest revenue in an industry of users choice  
	//Pass industry description/name as parameter
	app.get('/api/v1/revenue/highest_revenue/:industry', getCompanyInfoForIndustry);
	
	//This route returns number of workers vs. revenue information for all companies in an industry of users choice  
	//Pass industry description/name as parameter
	app.get('/api/v1/revenue/revenue_workers/:industry', getWorkerVsRevenueInfoForIndustry);
};

var getCompanyInfoForIndustry = function(req, res){
	console.log('DVWS Received Request GET: ', req.originalUrl);
	revenue_logic.getCompanyInfoForIndustry(req, res);
}

var getWorkerVsRevenueInfoForIndustry = function(req, res){
	console.log('DVWS Received Request GET: ', req.originalUrl);
	revenue_logic.getWorkerVsRevenueInfoForIndustry(req, res);
}

module.exports = {
	initRoutes: initRoutes
};
