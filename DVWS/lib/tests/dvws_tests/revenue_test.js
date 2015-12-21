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

describe("API:Route:Revenue", function() {
	
	describe("Revenue", function() {
		describe("GET /api/v1/revenue/highest_revenue/:industry", function() {
			it("Should return information of a company with highest revenue in health industry", function() {
				return request(app)
					.get("/api/v1/revenue/highest_revenue/" + "Health")
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
		
		describe("GET /api/v1/revenue/revenue_workers/:industry", function() {
			it("number of workers vs. revenue information for all companies in energy industry", function() {
				return request(app)
					.get("/api/v1/revenue/revenue_workers/" + "Energy")
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