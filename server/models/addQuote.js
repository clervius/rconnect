var mongoose = require('mongoose');
var quote = require('../api/quotes/quote.model');
var taxpayer = require('../api/taxpayer/taxpayer.model');

module.exports = function(quote){
	var taxpayer = require('../api/taxpayer/taxpayer.model')
	var quote = require('../api/quotes/quote.model');
	quote.find({}).exec(function(err, collection){
		if(collection === 0){
			quote.create({
				_tpayer: ObjectId("576b0ba1772874401ff214e6"),
				quote: 3500,
				accepted: true,
				createTime: ISODate("2016-06-01T17:23:06.270Z")
			});
			quote.create({
				_tpayer: ObjectId("576b0ba1772874401ff214ea"),
				quote: 3500,
				accepted: true,
				createTime: ISODate("2016-06-06T17:23:06.270Z")
			});
			quote.create({
				_tpayer: ObjectId("576b0ba1772874401ff214ee"),
				quote: 3500,
				accepted: true,
				createTime: ISODate("2016-06-12T17:23:06.270Z")
			});
		};
	});
	console.log("Quotes added")
}
