

module.exports = function(app){
	var db = mongoose.connection;

	//routes
	app.get('*', function(req, res){
		res.render('index');
		//console.log(taxpayers)
	})

}