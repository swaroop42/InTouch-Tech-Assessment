var csvParser = require('csv-parse');
var fs = require('node-fs');
var bluebird = require('bluebird');
var filePath = "../InTouch_Tech_Assessment/csv_files/dataset.csv";

/*
This function returns average growth for following industries:
 - Health
 - Energy
 - IT Services
 - Engineering
 - Government Services
 - Financial Services
*/
var getAvgGrowthPerIndustry = function(req, res){
	
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
			
			var avgGrowthPerIndustryObj = {
				Health: {Average_Growth: avgGrHealth, Industry: "Health"},
				Energy: {Average_Growth: avgGrEnergy, Industry: "Energy"},
				IT: {Average_Growth: avgGrIT, Industry: "IT Services"},
				Engineering: {Average_Growth: avgGrEng, Industry: "Engineering"},
				Government: {Average_Growth: avgGrGov, Industry: "Government Services"},
				Finance: {Average_Growth: avgGrFin, Industry: "Financial Services"}
			};
			
			console.log('DVWS Successfully Processed GET: ', req.originalUrl);
			res.json(avgGrowthPerIndustryObj);
		}
	});
}


//This function processes and returns information of a company with highest growth in a state of users choice
var getCompanyInfoForState = function(req, res){
	
	var dataRows = readCsvFile(filePath).toString().split(/\r?\n/);
	dataRows.splice(0, 1);
	
	var stateName = "";
	var topGrowth = 0;
	var infoObj = {};
	
	var totalRecordsCsv = dataRows.length;
	var totalProcessedCount = 0;
	
	return bluebird.resolve(dataRows)
	.each(function(dataRow){
		totalProcessedCount++;
		
		var dataColumns = dataRow.split(",");
		
		stateName = dataColumns[12];
		
		if(stateName == req.params.state){
			if(topGrowth < parseInt(dataColumns[15])){
				topGrowth = parseInt(dataColumns[15]);
				
				infoObj.Company = dataColumns[9];
				infoObj.Industry = dataColumns[17];
				infoObj.State = dataColumns[11];
				infoObj.Metro = dataColumns[14];
				infoObj.City = dataColumns[13];
				infoObj.Growth = dataColumns[15];
				infoObj.Revenue = dataColumns[16];	
				infoObj.Workers = dataColumns[8];
				infoObj.Rank = dataColumns[7];
				infoObj.Id = dataColumns[6];			
			}
		}
		
		if(totalProcessedCount == totalRecordsCsv - 1){
			console.log('DVWS Successfully Processed GET: ', req.originalUrl);
			res.json(infoObj);
		}
	});
}

//Function reads through each row of data in CSV file
function readCsvFile(filePath){
	var file = fs.readFileSync(filePath, 'utf8');
	return file;
}

module.exports = {
	getAvgGrowthPerIndustry: getAvgGrowthPerIndustry,
	getCompanyInfoForState: getCompanyInfoForState
};