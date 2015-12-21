/* global __dirname */

module.exports = function(router){
	router.get('/', function(req, res){
		res.render(__dirname+"/../../views/index.html");
	});
}