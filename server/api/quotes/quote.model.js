'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var quoteSchema = new Schema({
	_tpayer : {
		type: Schema.ObjectId,
		ref: 'taxpayer'
	},
	_creator: {
		type:Schema.ObjectId,
		ref: 'user'
	},
	quote: Number,
	accepted: Boolean,
	createTime: {
		type: Date,
		'default': Date.now
	}
});

module.exports = mongoose.model('quote', quoteSchema);