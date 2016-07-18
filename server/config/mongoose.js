var mongoose = require('mongoose');
	path = require('path');
	

module.exports = function(config, taxpayer){
	mongoose.connect(config.db);

	var db = mongoose.connection;
	db.on('error', console.error.bind(console, "DB is not connected - connection error ..."));
	db.once('open', function callback(){
		console.log('db connection established in ' + config.where + ' at ' + config.db );
	});

}