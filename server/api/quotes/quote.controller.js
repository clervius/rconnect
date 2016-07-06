'use strict';

var _ = require('lodash');
var taxpayer = require('../taxpayer/taxpayer.model');
var quote = require('./quote.model');
var path = require('path');
var express = require('express');


exports.createQuote = function(req, res){
	console.log(req.body);
	console.log(req.params.id);
	var newQuote = new quote();
	newQuote._tpayer = req.body.tpayer;
	newQuote.quote = req.body.quoteAmt;
	newQuote.accepted = false;
	newQuote._creator = req.body.creator;
	newQuote.save(function(err, quote){
		if(err){
			console.log("Error occured saving quote");
		}else{
			console.log("success quote saved");
			console.log(quote);
			res.json(quote);
		}
	})
};

exports.acceptedQuotes = function(req, res){
	quote.find({accepted: true}).exec(function(err, quotes){
		if(err){
			return handleError(res, err);
		}if(!quotes){
			return res.send(404);
		}else{
			console.log(quotes);
			res.json(quotes);
		}

	});
};
exports.acceptedQuote = function(req, res){
		quote.findOne({_id: req.params.id, accepted: true}).exec(function(err, quote){
		if(err){
			return handleError(res, err);
		}if(!quote){
			return res.sendStatus(404);
		}else{
			console.log(quote);
			res.json(quote)
		}

	});
};

exports.pendingQuotes = function(req, res){
	quote.find({accepted: false}).exec(function(err, quotes){
		if(err){
			return handleError(res, err);
		}if(!quotes){
			return res.send(404);
		}else{
			console.log(quotes);
			res.json(quotes);
		}

	});
};
exports.pendingQuote = function(req, res){
	quote.findOne({_id: req.params.id, accepted: false}).exec(function(err, quote){
		if(err){
			return handleError(res, err);
		}if(!quote){
			return res.sendStatus(404);
		}else{
			console.log(quote);
			res.json(quote)
		}

	});
};


function handleError(res, err){
	return res.send(500, err);
}
