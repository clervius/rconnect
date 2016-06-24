'use strict';

var require('lodash');
var quote = require('./quote.model');
var path = require('path');
var express = require('express');

exports.acceptedQuotes = function(req, res){};
exports.acceptedQuote = function(req, res){};

exports.pendingQuotes = function(req, res){};
exports.pendingQuote = function(req, res){};


function handleError(res, err){
	return res.send(500, err);
}