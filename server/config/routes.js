var mongoose = require('mongoose');

module.exports = function(app, taxpayer, db){
	
	var	taxpayer = mongoose.model('taxpayer');
	//routes
	app.get('/partials/*', function(req, res){
	    res.render('../../public/app/' + req.params[0]);
	});

	
	app.get('*', function(req, res){
		taxpayer.find({}).exec(function(err, taxpayers){
			if(err){
				res.render('index');
				console.log('did not get tpayers');
			}else{
				res.render('index', { taxpayers : taxpayers});
				console.log(taxpayers);
			}
		});

		
		
		
	})

}