'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var quoteSchema = new Schema({
	_tpayer : {
		type: Schema.ObjectId,
		ref: 'taxpayer'
	},
	_creator: {
		type: Schema.ObjectId,
		ref: 'user'
	},
	quote: Number,
	accepted: Boolean,
	createTime: {
		type: Date,
		'default': Date.now
	}
});

var autoPopulateQuote = function(next){
	this.populate('_tpayer');
	///this.populate('_creator');
	next();
}

quoteSchema.pre('findOne', autoPopulateQuote).pre('find', autoPopulateQuote);

module.exports = mongoose.model('quote', quoteSchema);



