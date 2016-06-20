

module.exports = function(app){
	var db = mongoose.connection;

	//routes
	app.get('*', function(req, res){
		res.render('index', {taxpayers: taxpayers});
		console.log(taxpayers)
	})

}