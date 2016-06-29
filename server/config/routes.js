'use strict';

var path = require('path');



module.exports = function(app){
	

	app.get('/app/*', require('../api/taxpayer'));

	app.get('/partials/*', function(req, res){
	    res.render('../../public/app/' + req.params[0]); 
	});
	
		

	app.get('*', function(req, res){
		// create a function that checks if you're logged in and forwards you to '/app/'
		res.render('index');		
	});

}