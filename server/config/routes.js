var mongoose = require('mongoose');

module.exports = function(app, taxpayer, db){
	
	var	taxpayer = mongoose.model('taxpayer');
	//routes
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

		/*
		res.render('index', function(){
			taxpayer.find({}).exec(function(err, taxpayers){
				if(err){
					console.log('did not find taxpayers');
				}else{
					taxpayers: taxpayers
					console.log('things look ok');
				console.log(taxpayers[1])
				}
			});
		});



		taxpayer.find({}).exec(function(err, taxpayers){
			if(err){
				console.log('did not find taxpayers');
			}else{
				res.render('index', {
					taxpayers: taxpayers
				});
				console.log('things look ok');
				console.log(taxpayers[0])
			}
		});*/

		
		
	})

}