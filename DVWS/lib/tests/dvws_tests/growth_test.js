"use strict";
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
var bluebird = require("bluebird");
var chaiHttp = require("chai-http");

chai.use(chaiAsPromised);
chai.use(chaiHttp);

var app = "http://localhost:8000";
var expect = chai.expect;

var request = chai.request;

describe("API:Route:Growth", function() {
	
	describe("Growth", function() {
		describe("GET /api/v1/growth/average_growth", function() {
			it("Should return average growth in Health, Energy, IT Services, Engineering, Government Services and Financial Services Industries", function() {
				return request(app)
					.get("/api/v1/growth/average_growth")
					.then(function(res) {
						expect(res).to.have.status(200);
						expect(res).to.be.json;
					})
					.catch(function(err) {
						console.log(err.stack);
						throw err;
					});
			});
		});
		
		describe("GET /api/v1/growth/highest_growth/:state", function() {
			it("Should return information of a company with highest growth in the state of NY", function() {
				return request(app)
					.get("/api/v1/growth/highest_growth/" + "NY")
					.then(function(res) {
						expect(res).to.have.status(200);
						expect(res).to.be.json;
					})
					.catch(function(err) {
						console.log(err.stack);
						throw err;
					});
			});
		});
	});
});