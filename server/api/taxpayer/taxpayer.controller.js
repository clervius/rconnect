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
			console.log(taxpayers);
			return res.json(taxpayers);			
		});
};
exports.singleTaxpayer = function(req, res){
	taxpayer.findOne({_id:req.params.id}, function(err, taxpayer){
		if(err){
			return handleError(res, err);
		}if(!taxpayer){
			return res.send(404);
		}
		console.log(taxpayer);
		return res.json(taxpayer);
	});	
};


function handleError(res, err){
	return res.send(500, err)
}