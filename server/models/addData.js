var mongoose = require('mongoose');
var	taxpayer = require('./taxpayer');



module.exports = function(taxpayer){
	//var taxpayer = mongoose.model('taxpayer')
	var	taxpayer = require('./taxpayer');
	taxpayer.find({}).exec(function(err, collection){
			if(collection.length === 0) {
				taxpayer.create({
					firstName: "Joram",
					lastName: "Clervius",
					email: "clervius@gmail.com",
					pNumber: 9543247726,
					filingStatus : "hoh",
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
					pNumber: 9542348134,
					filingStatus : "hoh",
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
			}
		})

};