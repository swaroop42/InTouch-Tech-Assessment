var csvParser = require('csv-parse');
var fs = require('node-fs');
var bluebird = require('bluebird');
var filePath = "../InTouch_Tech_Assessment/csv_files/dataset.csv";

//This function processes and returns information of a company with highest revenue in an industry of users choice
var getCompanyInfoForIndustry = function(req, res){
	
	var dataRows = readCsvFile(filePath).toString().split(/\r?\n/);
	dataRows.splice(0, 1);
	
	var industryName = "";
	var topRevenue = 0;
	var infoObj = {};
	
	var totalRecordsCsv = dataRows.length;
	var totalProcessedCount = 0;
	
	return bluebird.resolve(dataRows)
	.each(function(dataRow){
		totalProcessedCount++;
		
		var dataColumns = dataRow.split(",");
		
		industryName = dataColumns[17];
		
		if(industryName == req.params.industry){
			if(topRevenue < parseInt(dataColumns[16])){
				topRevenue = parseInt(dataColumns[16]);
				
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

//This function processes and returns number of workers vs. revenue information for all companies in an industry of users choice
var getWorkerVsRevenueInfoForIndustry = function(req, res){
	
	var dataRows = readCsvFile(filePath).toString().split(/\r?\n/);
	dataRows.splice(0, 1);
	
	var workerVsRevenueObj = {};
	var totalRecordsCsv = dataRows.length;
	var totalProcessedCount = 0;
	
	var industryName = "";
	
	return bluebird.resolve(dataRows)
	.each(function(dataRow){
		totalProcessedCount++;
		
		var dataColumns = dataRow.split(",");
		
		industryName = dataColumns[17];
		
		if(industryName == req.params.industry){
			var id = dataColumns[6];
			var company = dataColumns[9];
			var workers = dataColumns[8];
			var revenue = dataColumns[16];
			
			workerVsRevenueObj[id] = {
				Company: company,
				Workers: workers,
				Revenue: revenue
			};
		}
		
		if(totalProcessedCount == totalRecordsCsv - 1){
			console.log('DVWS Successfully Processed GET: ', req.originalUrl);
			res.json(workerVsRevenueObj);
		}	
	});
}

//Function reads through each row of data in CSV file
function readCsvFile(filePath){
	var file = fs.readFileSync(filePath, 'utf8');
	return file;
}

module.exports = {
	getCompanyInfoForIndustry: getCompanyInfoForIndustry,
	getWorkerVsRevenueInfoForIndustry: getWorkerVsRevenueInfoForIndustry
};