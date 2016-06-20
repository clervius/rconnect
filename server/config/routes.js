

module.exports = function(app){
	//routes
	app.get('*', function(req, res){
		res.render('index');
	})

}