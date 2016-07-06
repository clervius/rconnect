'use strict';

var path = require('path');
var express = require('express');


module.exports = function(app){
	
	
	// Main
	app.get('/app/', isLoggedIn, function(req, res){
		res.render('app', {user: req.user});
		//res.json(req.user);
		console.log(req.user)
	});
	app.get('/access/*', function(req, res){
		res.render('homeform');
	});
	
	app.post('/access/register', passport.authenticate('local-signup', {
		successRedirect: '/app/',
		failureRedirect: '/'
	}));
	app.post('/access/login', passport.authenticate('local-login', {
		successRedirect: '/app/',
		failureRedirect: '/'
	}));

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

function isLoggedIn(req, res, next){
	if(req.isAuthenticated()){
		return next();
	} else{
		res.redirect('/access/signup')
	}
}