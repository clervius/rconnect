'use strict';

var path = require('path');
var express = require('express');


module.exports = function(app){
	
	// Main application
	app.get('/app/', function(req, res){
		res.render('app');
	});


	// Angular routes
	app.get('/app/taxpayers/*', require('../api/taxpayer'));
	app.post('/app/taxpayers/*', require('../api/quotes'));
	app.get('/app/quotes/*', require('../api/quotes'));
	//app.get('/app/users/*', require('../api/user'));

	// To render front-end jade tpls
	app.get('/partials/*', function(req, res){
	    res.render('../../public/' + req.params[0]); 
	});
	
	// catch all
	app.get('*', function(req, res){
		res.render('index');		
	});

}