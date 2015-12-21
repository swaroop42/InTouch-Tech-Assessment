# InTouch Technical Assessment
	- Candidate Name: Swaroop Srinivasan
	- Assignment Option: Option 2
	
## Assignment Summary
 	- The following project is a proof-of-concept dashboard application that visualizes the data set for The Inc. Magazines
	  annual list of 5000 fastest growing private companies in the USA (Inc5000 Company List_2014.csv)
	
	- The data set was taken from following web site: 
			https://public.tableau.com/s/resources?qt-overview_resources=1 
	  under Business/The 2014 Inc. 5000
	  
	- It is stored in the project in the following location csv_files/dataset.csv
	  
	- The project aims to focus on the revenue and growth of the c companies in the list and 
	  illustrate the date set in the following 4 ways:
		1. Show the average growth of companies in the Health, Energy, IT Services, Engineering, Govern Services and Financial Services Industries
		2. Show the information of the company with the highest growth in any state of the users choice
		3. Show the information of a comapny with the highest revenue in any industry of the users choice
		4. Show the relationship between number of workers in a company and revenue of a company for all companies in an industry of the users choice
	
	- The project uses a charting library on the front end to illustrate the data set	
	- The project uses REST API (Data Visualization Web Service, DVWS) as an independent client application in the back-end. 
	  It sorts and processes the data sets and returns them to the front end as JSON objects
	- The project also use Mocha and Chai libraries to run functional tests on the back-end DVWS API's routes and business logic

### DVWS API
	- The API runs on the following ip and port configurations
		-> ip: localhost
		-> port: 8000
		
	- Run app.js to start the Web Service API
	
	- The API contains the following routes:
		-> 
	  
## Installation And Use
	- Link to GitHub Repo: git@github.com:swaroop42/InTouch-Tech-Assessment.git
	- Download Project from GitHub
	- Open project with editor of choice 
	- Open file app.js in command prompt
	- run command: npm install 
	- This will install all packages and libraries for the project
	- 