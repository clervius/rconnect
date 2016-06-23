'use strict';

var _ = require('lodash');
var taxpayer = require('./taxpayer.model');
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
			//return res.status(200)
				//.json(taxpayers);
			res.render('app', {taxpayers: taxpayers, pageTitle: "Taxpayer reconnect", page: "testtpayers"});
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
	//taxpayer.findById(req.params.id, )
};

exports.pendingTaxpayers = function(req, res){};
exports.onePendingTaxpayer = function(req, res){};

exports.acceptedTaxpayers = function(req, res){};
exports.oneAcceptedTaxpayers = function(req, res){};

function handleError(res, err){
	return res.send(500, err)
}