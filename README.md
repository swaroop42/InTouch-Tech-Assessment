# InTouch Technical Assessment
	- Candidate Name: Swaroop Srinivasan
	- Assignment Option: Option 2
	
## Assignment Summary
 	- The following project is a proof-of-concept dashboard application that visualizes the data set for The Inc. Magazines
	  annual list of 5000 fastest growing private companies in the USA (Inc5000 Company List_2014.csv)
	
	- The data set was taken from following web site: 
			https://public.tableau.com/s/resources?qt-overview_resources=1 
	  under Business/The 2014 Inc. 5000
	  
	- The data set is stored in the project in the following location csv_files/dataset.csv
	  
	- The project aims to focus on the revenue and growth of the c companies in the list and 
	  illustrate the date set in the following 4 ways:
		1. Show the average growth of companies in the Health, Energy, IT Services, Engineering, Govern Services and Financial Services Industries
		2. Show the information of the company with the highest growth in any state of the users choice
		3. Show the information of a company with the highest revenue in any industry of the users choice
		4. Show the relationship between number of workers in a company and revenue of a company for all companies in an industry of the users choice
	
	- The project uses a charting library on the front end to illustrate the data set	
	- The project uses REST API (Data Visualization Web Service, DVWS) as an independent client application in the back-end. 
	  It sorts and processes the data sets and returns them to the front end as JSON objects
	- The project also use Mocha and Chai libraries to run functional tests on the back-end DVWS API's routes and business logic

## API Information
	- The Data Visualization Web Service (DVWS) API runs on the following ip and port configurations
		-> ip: localhost
		-> port: 8000
		
	- Run app.js to start the API
	
	- The API contains the following routes:
		-> http://localhost:8000/api/v1/growth/average_growth
		-> http://localhost:8000/api/v1/growth/highest_growth/:state
		-> http://localhost:8000/api/v1/revenue/highest_revenue/:industry
		-> http://localhost:8000/api/v1/revenue/revenue_workers/:industry
	
	  
## Installation And Use
	- Link to GitHub Repo: git@github.com:swaroop42/InTouch-Tech-Assessment.git
	- Download Project from GitHub
	- Run Node express
	- Naigate to home directory of the project
	- Run the following command in console: 
		> npm install  
	- This will install all dependency packages and libraries for the project
	- Run the following command in console to start the DVWS API: 
		> node app.js 

## Tests
	- The Project contains automated unit tests written using Mocha and Chai libraries 
	- The tests are contained under /tests/dvws_tests
	- Read the following instructions to run the automated tests
	  For example: To run the automated tests that are related to retrieving data related to growth
		-> Navigate to /tests/dvws_tests in console
		-> Run the following command to execute the automated test cases
			> mocha growth_test.js
	
	- The DVWS API can also be tested using PostMan REST Client
	- The test routes are contained in the Collections called DVWS API. 
	- This is the link to to the Collections stored on PostMan REST Client
		-> https://www.getpostman.com/collections/3368f829551cbfa6f608  
			