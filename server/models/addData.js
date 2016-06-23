var mongoose = require('mongoose');
var	taxpayer = require('../api/taxpayer/taxpayer.model');



module.exports = function(taxpayer){
	//var taxpayer = mongoose.model('taxpayer')
	var	taxpayer = require('../api/taxpayer/taxpayer.model');
	taxpayer.find({}).exec(function(err, collection){
			if(collection.length === 0) {
				taxpayer.create({
					firstName: "Joram",
					lastName: "Clervius",
					email: "clervius@gmail.com",
					city: "Lauderhill",
					state: "FL",
					zip: 33319,
					pNumber: 9543247726,
					filingStatus : "hoh",
					student: false,
					tpDob: 12/30/1988,
					numDdep: 1,
					dependents: [
						{
							depDob: 01/10/1980,
							depStudent: true,
							depDisabled: false,
							depLive: true
						}
					],
					income: [
						{
							inType: "w-2",
							income: 15000,
							fdTax: 2000,
							stTax: 1000
						},
						{
							inType: "1099",
							income: 50000,
							expenses: 15000
						}
					]
				});
				taxpayer.create({
					firstName: "John",
					lastName: "Petit-Dos",
					email: "jpdos@hotmail.com",
					city: "Tamarac",
					state: "FL",
					zip: 33321,
					pNumber: 9542348134,
					filingStatus : "hoh",
					student: true,
					tpDob: 01/10/1980,
					numDdep: 1,
					dependents: [
						{
							depDob: 12/30/1988,
							depStudent: true,
							depDisabled: false,
							depLive: true
						}
					],
					income: [
						{
							inType: "w-2",
							income: 10000,
							fdTax: 2050,
							stTax: 500
						},
						{
							inType: "1099",
							income: 50850,
							expenses: 12500
						}
					]
				});
				taxpayer.create({
					firstName: "Trecia",
					lastName: "Lewis",
					email: "trecia.lewis@mymail.barry.edu",
					city: "Coral Springs",
					state: "FL",
					zip: 33067,
					pNumber: 9542348134,
					filingStatus : "s",
					student: true,
					tpDob: 05/10/1976,
					numDdep: 2,
					dependents: [
						{
							depDob: 01/30/1998,
							depStudent: true,
							depDisabled: false,
							depLive: true
						},
						{
							depDob: 12/30/2008,
							depStudent: true,
							depDisabled: false,
							depLive: true
						}
					],
					income: [
						{
							inType: "w-2",
							income: 20000,
							fdTax: 2000,
							stTax: 5000
						},
						{
							inType: "1099",
							income: 5020,
							expenses: 2250
						}
					]
				});
				taxpayer.create({
					firstName: "Jennifer",
					lastName: "Lovelace",
					email: "jennielovelace2002@yahoo.fr",
					city: "Coral Springs",
					state: "FL",
					zip: 33067,
					pNumber: 9542004535,
					filingStatus : "mfj",
					student: false,
					tpDob: 10/29/1989,
					numDdep: 0,
					dependents: [],
					income: [
						{
							inType: "w-2",
							income: 125200,
							fdTax: 45614
						}
					]
				});
				taxpayer.create({
					firstName: "Melisha",
					lastName: "Clervius",
					email: "mclervius@gmail.com",
					city: "Verona",
					state: "NJ",
					zip: 95478,
					pNumber: 9548548621,
					filingStatus : "s",
					student: false,
					tpDob: 12/13/1996,
					numDdep: 1,
					dependents: [
						{
							depDob: 12/30/2007,
							depStudent: true,
							depDisabled: false,
							depLive: true
						}
					],
					income: [
						{
							inType: "w-2",
							income: 40000,
							fdTax: 2050
						}
					]
				});
			}
		})

};