var csvParser = require('csv-parse');
var fs = require('node-fs');
var bluebird = require('bluebird');

var getGrowthBySector = function(req, res){
	var filePath = "../InTouch_Tech_Assessment/csv_files/dataset.csv";
	
	var dataRows = readCsvFile(filePath).toString().split(/\r?\n/);
	dataRows.splice(0, 1);
	
	var industryType;
	var totalRecordsCsv = dataRows.length;
	var totalProcessedCount = 0;
	var sumGrHealth = 0;
	var cntGrHealth = 0;

	return bluebird.resolve(dataRows)
	.each(function(dataRow){
		totalProcessedCount++;
		
		var dataColumns = dataRow.split(",");
		
		if(dataColumns.length <= 1){
			return bluebird.resolve();
		}
		
		industryType = dataColumns[17];
		
		if(industryType == "Health"){
			cntGrHealth ++;
			sumGrHealth += parseInt(dataColumns[15]);
		}	
		
		if(totalProcessedCount == totalRecordsCsv - 1){
			var avgGrHealth = sumGrHealth/cntGrHealth;
	
			var growthBySectorObj = {
				health: {
					avgGrowth: avgGrHealth,
					sector: "Health"
				}
			};
			
			console.log('DVWS Successfully Processed GET: ', req.originalUrl);
			res.json(growthBySectorObj);
		}
	});
}

function readCsvFile(filePath){
	var file = fs.readFileSync(filePath, 'utf8');
	return file;
}

module.exports = {
	getGrowthBySector: getGrowthBySector
};