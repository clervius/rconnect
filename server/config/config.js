var path = require('path');
	rootPath = path.normalize(__dirname + '/../../');

module.exports = {
	development: {
		db: 'mongodb://localhost/rconnect',
		rootPath: rootPath,
		port: process.env.PORT || 3060,
		where: 'development - local' 
	},
	production: {
		db: 'mongodb://clervius:JcVrm431@ds038739.mlab.com:38739/rconnect',
		rootPath: rootPath,
		port: process.env.PORT || 80,
		where: 'production - mlab' 
	}
}