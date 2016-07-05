'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var crypto = require('bcrypt-nodejs');

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
	password: String,
	salt: String
}, {
	toJSON: { virtuals: true}
});

userSchema.methods.generateHash = function(password){
	return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.validPassword = function(password){
	return bcrypt.compareSync(password, this.password);
};
// Public profile information
userSchema
	.virtual('profile')
	.get(function(){
		return {
			'fname': this.fname,
			'lname': this.lname,
			'email': this.email,
			'city': this.city,
			'zip': this.zip,
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


/*
var autoPopulateUser = function(next){
	this.populate('_subscription');
	next();
}*/

// userSchema.pre('findOne', autoPopulateUser).pre('find', autoPopulateUser);

module.exports = mongoose.model('user', userSchema);
