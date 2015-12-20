var csvParser = require('csv-parse');
var fs = require('node-fs');
var bluebird = require('bluebird');
var filePath = "../InTouch_Tech_Assessment/csv_files/dataset.csv";

/*
Function returns average growth for following sectors:
 - Health
 - Energy
 - IT Services
 - Engineering
 - Government Services
 - Financial Services
*/
var getGrowthBySector = function(req, res){
	
	var dataRows = readCsvFile(filePath).toString().split(/\r?\n/);
	dataRows.splice(0, 1);
	
	var industryType = "";
	var totalRecordsCsv = dataRows.length;
	var totalProcessedCount = 0;
	var sumGrHealth = 0;
	var cntGrHealth = 0;
	var sumGrEnergy = 0;
	var cntGrEnergy = 0;
	var sumGrIT = 0;
	var cntGrIT = 0;
	var sumGrEng = 0;
	var cntGrEng = 0;
	var sumGrGov = 0;
	var cntGrGov = 0;
	var sumGrFin = 0;
	var cntGrFin = 0;
	
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
		
		if(industryType == "Energy"){
			cntGrEnergy ++;
			sumGrEnergy += parseInt(dataColumns[15]);
		}	
		
		if(industryType == "IT Services"){
			cntGrIT ++;
			sumGrIT += parseInt(dataColumns[15]);
		}	
		
		if(industryType == "Engineering"){
			cntGrEng ++;
			sumGrEng += parseInt(dataColumns[15]);
		}	
		
		if(industryType == "Government Services"){
			cntGrGov ++;
			sumGrGov += parseInt(dataColumns[15]);
		}	
		
		if(industryType == "Financial Services"){
			cntGrFin ++;
			sumGrFin += parseInt(dataColumns[15]);
		}	
		
		if(totalProcessedCount == totalRecordsCsv - 1){
			var avgGrHealth = sumGrHealth/cntGrHealth;
			var avgGrEnergy = sumGrEnergy/cntGrEnergy;
			var avgGrIT = sumGrIT/cntGrIT;
			var avgGrEng = sumGrEng/cntGrEng;
			var avgGrGov = sumGrGov/cntGrGov;
			var avgGrFin = sumGrFin/cntGrFin;
			
			var growthBySectorObj = {
				Health: {avgGrowth: avgGrHealth, sector: "Health"},
				Energy: {avgGrowth: avgGrEnergy, sector: "Energy"},
				IT: {avgGrowth: avgGrIT, sector: "IT Services"},
				Engineering: {avgGrowth: avgGrEng, sector: "Engineering"},
				Government: {avgGrowth: avgGrGov, sector: "Government Services"},
				Finance: {avgGrowth: avgGrFin, sector: "Financial Services"}
			};
			
			console.log('DVWS Successfully Processed GET: ', req.originalUrl);
			res.json(growthBySectorObj);
		}
	});
}

//Function reads through each row of data in CSV file
function readCsvFile(filePath){
	var file = fs.readFileSync(filePath, 'utf8');
	return file;
}

module.exports = {
	getGrowthBySector: getGrowthBySector
};