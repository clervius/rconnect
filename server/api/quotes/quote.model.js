'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var quoteSchema = new Schema({
	_tpayer : {
		type:Schema.objectId,
		ref: 'taxpayer'
	},
	_creator: {
		type:Schema.objectId,
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