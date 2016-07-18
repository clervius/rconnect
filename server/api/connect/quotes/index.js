'use strict';
 
var controller = require('./quote.controller');
var express = require('express');
var router = express.Router();



router.post('/connect/taxpayers/', controller.createQuote);

router.get('/connect/quotes/accepted/', controller.acceptedQuotes);
router.get('/connect/quotes/accepted/:id', controller.acceptedQuote);

router.get('/connect/quotes/pending/', controller.pendingQuotes);
router.get('/connect/quotes/pending/:id', controller.pendingQuote);


module.exports = router;
