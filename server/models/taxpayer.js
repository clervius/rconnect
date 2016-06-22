var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var dependentSchema = new Schema({
	depDob: Date,
	depStudent: Boolean,
	depDisabled: Boolean,
	depLive: Boolean
});

var incExSchema = new Schema({
	inType: String,
	income: Number,
	fdTax: Number,
	stTax: Number,
	expenses: Number,
	oDiv: Number,
	qDiv: Number,
	combatPay: Boolean,
	code: String
});

var taxpayerSchema = new Schema({
	firstName: String,
	lastName: String,
	email: String,
	city: String,
	state: String,
	zip: Number,
	pNumber: Number,
	filingStatus : String,
	student: Boolean,
	tpDob: Date,
	numDdep: Number,
	dependents: [dependentSchema],
	income: [incExSchema]
});

//============================================================

module.exports = mongoose.model('taxpayer', taxpayerSchema);


