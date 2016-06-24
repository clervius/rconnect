'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var crypto = require('crypto');
var authTypes = ['github', 'twitter', 'facebook', 'google'];

var userSchema = new Schema({
	name: String,
	email: {
		type: String,
		lowercase: true
	},
	phoneNumber: Number,
	_subscription: {
		type: Schema.objectId,
		ref: 'subscription'
	},
	role: {
		type: String,
		default: 'user'
	},
	hashedPassword: String,
	provider: String,
	salt: String
});

module.exports = mongoose.model('user', userSchema);