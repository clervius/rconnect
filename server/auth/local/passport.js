var passport = require('passport');
var	localStrategy = require('passport-local').Strategy;

exports.setup = function(User, config){
	passport.use(new localStrategy({
			usernameField: 'email',
			passwordField: 'password'
		},
		function(email, password, done){
			User.findOne({
				email: email.toLowerCase()
			}, function(err, user){
				if(err) return done(err);

				if(!user){
					return done(null, false, { message: 'This email is not registered'});
				}
				if(!user.authenticate(password)) {
					return done(null, false, {message: 'This password is not correct'});
				}
				return done(null, user);
			});
		}
	));
};