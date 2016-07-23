'use strict';

var path = require('path');
var express = require('express');


module.exports = function(app, passport){
	
	
	// Main
	app.get('/choice/', isLoggedIn, function(req, res){
		res.render('choice', {user: req.user});
	});

	app.get('/connect/', isLoggedIn, function(req, res){
		res.render('connect', {user: req.user, title: "Advent Connect", product: "Advent Connect"});
		//res.json(req.user);
		console.log(req.user)
	});
	app.get('/access/*', function(req, res){
		res.render('homeform');
	});
	
	app.post('/access/register', passport.authenticate('local-signup', {
		successRedirect: '/choice/',
		failureRedirect: '/'
	}));
	app.post('/access/login', passport.authenticate('local-login', {
		successRedirect: '/choice/',
		failureRedirect: '/'
	}));

	// Angular routes
	app.get('/connect/taxpayers/*', require('../api/connect/taxpayer'));
	app.post('/connect/taxpayers/*', require('../api/connect/quotes'));
	app.get('/connect/quotes/*', require('../api/connect/quotes'));
	app.post('/connect/quotes/*', require('../api/connect/quotes'));
	app.get('/app/user/', require('../api/user'));
	app.use('/auth', require('../auth'));
	//app.get('/app/users/*', require('../api/user'));

	// To render front-end jade tpls
	app.get('/partials/*', function(req, res){
	    res.render('../../public/' + req.params[0]); 
	});
	
	

	app.get('/logout', function(req, res){
		req.logout();
		res.redirect('http://adventtax.pro');
	});

	// catch all
	app.get('*', function(req, res, next){
		if(req.isAuthenticated()){
			res.redirect('/choice/')
		}else{
			res.render('index')
		}	
	});

}

function isLoggedIn(req, res, next){
	if(req.isAuthenticated()){
		return next();
	} else{
		res.redirect('/access/signup')
	}
}