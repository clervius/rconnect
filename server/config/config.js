var path = require('path');
	rootPath = path.normalize(__dirname + '/../../');

module.exports = {
	development: {
		db: 'mongodb://localhost/rconnect',
		rootPath: rootPath,
		port: process.env.PORT || 3060,
		where: 'development - local',
		secrets: {
			session: 'Adventfinancialcorp-dev'
			},
		userRoles: ['user', 'admin'],
		keys: {
			access: process.env.access,
			secret: process.env.secret,
			bucket: process.env.bucket,
			region: process.env.region
			}
	},
	production: {
		db: 'mongodb://clervius:JcVrm431@ds038739.mlab.com:38739/rconnect',
		rootPath: rootPath,
		port: process.env.PORT || 80,
		where: 'production - mlab',
		secrets: {
			session: 'Adventfinancialcorp-prod'
			},
		userRoles: ['user', 'admin'],
		keys: {
			access: process.env.access,
			secret: process.env.secret,
			bucket: process.env.bucket,
			region: process.env.region
			}
	}
}