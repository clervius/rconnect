'use strict';

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

var exSchema = new Schema({
	exType: String,
	reMortgageInterest: Number,
	reTaxes: Number,
	reRepaymenCredit: Number,
	charitableDonation: Number,
	medicalExpenses: Number,
	insPremiumTaxCredit: Number,
	insSharedPayment: Number,
	insTaxCreditRepayment: Number,
	childcare: Number,
	edStudentLoanInterest: Number,
	edUndergradExpenses: Number,
	edOtherTuition: Number,
	jobExpenses: Number,
	taxPreparationFee: Number,
	FedQuarterlyTaxesPaid: Number
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
	decided: Boolean,
	dependents: [dependentSchema],
	income: [incExSchema]
}, {
	toJSON: { virtuals: true}
});

taxpayerSchema.virtual('date').get(function(){
	return this._id.getTimestamp();
})
//============================================================

module.exports = mongoose.model('taxpayer', taxpayerSchema);