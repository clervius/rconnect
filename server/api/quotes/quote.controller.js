'use strict';

var _ = require('lodash');
var taxpayer = require('../taxpayer/taxpayer.model');
var quote = require('./quote.model');
var path = require('path');
var express = require('express');


exports.acceptedQuotes = function(req, res){
	quote.find({accepted: true}).exec(function(err, quotes){
		if(err){
			return handleError(res, err);
		}if(!quotes){
			return res.send(404);
		}else{
			taxpayer.find({}).exec(function(err, taxpayers){
				if(err){
					return handleError(res, err);
				}if(!taxpayers){
					console.log(quotes);
					res.render('accepted', {quotes: quotes, pageTitle: "Accepted Quotes", page: 'acceptedQuotes'});
				}else{

					console.log(quotes);
					console.log(taxpayers);
					res.render('accepted', {quotes: quotes, taxpayers: taxpayers, pageTitle: "Accepted Quotes", page: 'acceptedQuotes'});
				}
			})
		}

	});
};
exports.acceptedQuote = function(req, res){
	var quotes = '';
	quote.find({}).exec(function(err, quotes){
		if(err){
			console.log("Error loading all quotes")
		}if(!quotes){
			console.log("no quotes")
		}else{
			var quotes = quotes;
		}
	});
	quote.findOne({_id: req.params.id, accepted: true}).exec(function(err, quote){
		if(err){
			return handleError(res, err);
		}if(!quote){
			return res.sendStatus(404);
		}else{
			taxpayer.find({}).exec(function(err, taxpayers){
				if(err){
					return handleError(res, err);
				}if(!taxpayers){
					console.log(quotes);
					res.render('singleAccepted', {quote: quote, quotes: quotes, pageTitle: quote._tpayer.firstName + "'s quote" });
				}else{

					console.log(quotes);
					console.log(taxpayers);
					res.render('singleAccepted', {quote: quote, quotes: quotes, taxpayers: taxpayers, pageTitle: quote._tpayer.firstName + "'s quote"});
				}
			})
		}

	});
};

exports.pendingQuotes = function(req, res){
	/*var criteria = ;
	var template = ;
	var page = ;
	loadQuotes(critera, template, page);*/
};
exports.pendingQuote = function(req, res){
	/*var criteria = ;
	var template = ;
	var page = ;
	loadQuotes(critera, template, page);*/
};


function handleError(res, err){
	return res.send(500, err);
}
