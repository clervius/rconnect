'use strict';

var path = require('path');
var express = require('express');


module.exports = function(app){
	
	
	// Main
	app.get('/access/*', function(req, res){
		res.render('homeform');
	});
	app.get('/app/', function(req, res){
		res.render('app');
	});


	// Angular routes
	app.get('/app/taxpayers/*', require('../api/taxpayer'));
	app.post('/app/taxpayers/*', require('../api/quotes'));
	app.get('/app/quotes/*', require('../api/quotes'));
	app.get('/app/user/', require('../api/user'));
	app.use('/auth', require('../auth'));
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