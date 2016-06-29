'use strict';

var path = require('path');
var express = require('express');


module.exports = function(app){
	
	app.get('/app/', function(req, res){
		res.render('app');
	});

	app.get('/app/taxpayers/', require('../api/taxpayer'));

	app.get('/partials/*', function(req, res){
	    res.render('../../public/' + req.params[0]); 
	});
	
	app.get('*', function(req, res){
		res.render('app');		
	});

}