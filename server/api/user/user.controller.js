'use strict';

var User = require('./user.model');
var passport = require('passport');
var config = require('../../config/config');
var jwt = require('jsonwebtoken');
var validationError = function(res, err) {
  return res.json(422, err);
};

// Update User profile
exports.changeInfo = function(req, res, next){
	var userId = req.user._id;
	var fname = req.body.fname;
	var lname = req.body.lname;
	var sAddress = req.body.sAddress;
	var city = req.body.city;
	var state = req.body.state;
	var email = req.body.email;
	var phoneNumber = req.body.phoneNumber;
	var password = req.body.password;

	User.findById(userId, function(err, user){
		console.log(user)
		if(fname.length){user.fname = fname}
		if(lname.length){user.lname = lname};
		if(sAddress.length){user.sAddress = sAddress};
		if(city.length){user.city = city};
		if(state.length){user.state = state};
		if(email){user.email = email};
		if(phoneNumber){user.phoneNumber = phoneNumber};
		if(password){user.password = password};
		console.log(user)
		user.save(function(err){
			if(err){console.log('not saved')}
		})
	});

	next();
}



// Create a new user
exports.create = function(req, res, next){
	var newUser = new User(req.body);
	newUser.provider = 'local';
	newUser.role = 'user';
	newUser.save(function(err, user){
		if(err){return validationError(res, err);}
		var token = jwt.sign({_id: user._id}, config.secrets.session, { expiresInMinutes: 60*5});
		res.json({token: token});
	});
};
// Get a single user
exports.show = function(req, res, next){
	var userId = req.params.id;

	User.findById(userId, function(err, user){
		if(err){ 
			return next(err);
			console.log("Error");
		}
		if(!user){ 
			return res.send(401);
			console.log("User not found")
		}
		res.json(user)
	});
};
// Delete a user
exports.destroy = function(req, res){
	User.findByIdAndRemove(req.params.id, function(err, user){
		if(err){return res.send(500, err)}
		return res.send(204);
	});
};
// Change a user's password
exports.changePassword = function(req, res, next){
	var userId = req.user._id;
	var oldPass = String(req.body.oldPassword);
	var newPass = String(req.body.newPassword);

	User.findById(userId, function(err, user){
		if(user.authenticate(oldPass)){
			user.password = newPass;
			user.save(function(err){
				if(err){return validationError(res, err);}
				res.send(200);
			});
		}else{
			res.send(403);
		}
	})
};

// reset a users password:

exports.resetPassword = function(email) {
  var chars="abcdefghijklmnopqrstuvwxyz123456789"
  var newPass=''

  for (var i = 0; i < 8; i++){
    newPass += chars.charAt(Math.floor(Math.random() * chars.length))
  }

  User.findOne({email: email}, function (err, user) {
    user.password = newPass;
    user.save(function(err) {
      if (err){
        console.log("error saving password");
      }
    });
  });

  return newPass;
};

/**
 * Get my info
 */
exports.me = function(req, res, next) {
  var userId = req.user._id;
  User.findOne({
    _id: userId
  }, '-salt -hashedPassword', function(err, user) { // don't ever give out the password or salt
    if (err) return next(err);
    if (!user) return res.json(401);
    res.json(user);
  });
};

/**
 * Authentication callback
 */
exports.authCallback = function(req, res, next) {
  res.redirect('/');
};