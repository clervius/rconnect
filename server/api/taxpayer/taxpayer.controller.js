'use strict';

var _ = require('lodash');
var taxpayer = require('./taxpayer.model');
var quote = require('../quotes/quote.model');
var path = require('path');
var express = require('express');



exports.newTaxpayers = function(req, res){
	taxpayer.find({})
		.exec(function(err, taxpayers){
			if(err){
				return handleError(res, err);
			}
			if(!taxpayers){
				return res.send(404);
			}
			
			quote.find({}).exec(function(err, quotes){
				if(err){
					return handleError(res, err)
				}
				if(!quotes){
					console.log(taxpayers);
					res.render('app', {taxpayers: taxpayers, pageTitle: "Taxpayer reconnect", page: "testtpayers"});
				}
				else{
					console.log(taxpayers);
					console.log(quotes);
					res.render('app', {taxpayers: taxpayers, quotes: quotes, pageTitle: "Taxpayer reconnect", page: "testtpayers"});
				}
			})
			
		});
};
exports.singleTaxpayer = function(req, res){
	console.log(req.params.id);
	taxpayer.findOne({_id: req.params.id}, function(err, taxpayer){
		if(err){
			return handleError(res, err);
		}
		if(!taxpayer){
			return res.send(404);
		}
		console.log(taxpayer);
		//return res.json(taxpayer);
		res.render('singletpayer', {taxpayer: taxpayer, pageTitle: "Taxpayer in " + taxpayer.city});
	});
	
};


function handleError(res, err){
	return res.send(500, err)
}