'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var crypto = require('crypto');

var userSchema = new Schema({
	fname: String,
	lname: String,
	sAddress: String,
	city: String,
	state: String,
	zip: Number,
	email: {
		type: String,
		lowercase: true
	},
	phoneNumber: Number,/*
	_subscription: {
		type: Schema.objectId,
		ref: 'subscription'
	},*/
	role: {
		type: String,
		default: 'user'
	},
	hashedPassword: String,
	provider: String,
	salt: String
}, {
	toJSON: { virtuals: true}
});
/*
* Virtuals 
*/
userSchema
	.virtual('password')
	.set(function(password){
		this._password = password;
		this.salt = this.makeSalt();
		this.hashedPassword = this.encryptPassword(password);
	})
	.get(function(){
		return this._password;
	});
// Public profile information
userSchema
	.virtual('profile')
	.get(function(){
		return {
			'name': this.name,
			'role': this.role
		}
	});
// Non-sensitive info for the token
userSchema
	.virtual('token')
	.get(function(){
		return {
			'_id': this._id,
			'role': this.role
		}
	});
// validate email is not taken
userSchema
	.path('email')
	.validate(function(value, respond){
		var self = this;
		this.constructor.findOne({
			email: value
		}, function(err, user){
			if(err){throw err}
			if(user){
				if(self.id === user.id){
					return respond(true);
				}
				return respond(false);
			}
			respond(true);
		});
	}, 'The specified email address is already in use.');

var validatePresenceOf = function(value){
	return value && value.length;
};
var autoPopulateUser = function(next){
	this.populate('_subscription');
	next();
}

userSchema.methods = {
	authenticate: function(plainText){
		return this.encryptPassword(plainText) === this.hashedPassword;
	},
	makeSalt: function(){
		return crypto.randomBytes(16).toString('base64');
	},
	encryptPassword: function(password){
		if(!password || !this.salt){ return '';}
		var salt = new Buffer(this.salt, 'base64');
		return crypto.pbkdf2Sync(password, salt, 10000, 64).toString('base64');
	}
},



userSchema
	.pre('save', function(next){
		if(!this.isNew){return next();}
		if(!validatePresenceOf(this.hashedPassword) && authTypes.indexOf(this.provider) === -1){
			next(new Error('Invalid password'))
		}
		else{ next();}
	});





userSchema.pre('findOne', autoPopulateUser).pre('find', autoPopulateUser);

module.exports = mongoose.model('user', userSchema);
