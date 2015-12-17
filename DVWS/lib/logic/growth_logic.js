var csvParser = require('csv-parse');
var fs = require('node-fs');
var bluebird = require('bluebird');

var getGrowthBySector = function(req, callback){
	var growthBySectorObj = {};
	
	var filePath = "../InTouch_Tech_Assessment/csv_files/dataset.csv";
	
	var dataRows = readCsvFile(filePath).toString().split(/\r?\n/);
	
	var industryType;
	var sumGrHealth = 0;
	var cntGrHealth = 0;
	
	dataRows.splice(0, 1);
	
	return bluebird.resolve(dataRows)
	.each(function(dataRow){
		var dataColumns = dataRow.split(",");
		
		if(dataColumns.length <= 1){
			return bluebird.resolve();
		}
		
		industryType = dataColumns[17];
		console.log(industryType);
		if(industryType == "Health"){
			cntGrHealth ++;
			sumGrHealth += dataColumns[15];
		}	
		
		return;	
	})
	
	var avgGrHealth = sumGrHealth/cntGrHealth;
	
	growthBySectorObj = {
		health: {"Health": avgGrHealth}
	};
	
	callback(growthBySectorObj);
}

function readCsvFile(filePath){
	var file = fs.readFileSync(filePath, 'utf8');
	return file;
}

module.exports = {
	getGrowthBySector: getGrowthBySector
}