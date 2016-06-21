var mongoose = require('mongoose');

module.exports = function(app, taxpayer, db){
	
	var	taxpayer = mongoose.model('taxpayer');
	//routes
	app.get('/app/*', function(req, res){
		taxpayer.find({}).exec(function(err, taxpayers){
			if(err){
				res.render('app');
				console.log('did not get tpayers');
			}else{
				res.render('app', { taxpayers : taxpayers});
				console.log(taxpayers[0]);
			}
		});
	});

	app.get('/partials/*', function(req, res){
	    res.render('../../public/app/' + req.params[0]); 
	});

	
	app.get('*', function(req, res){
		// create a function that checks if you're logged in and forwards you to '/app/'
		res.render('index');		
	});

}