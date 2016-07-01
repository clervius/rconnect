'use strict';
 
var controller = require('./quote.controller');
var express = require('express');
var router = express.Router();



router.post('/app/taxpayers/', controller.createQuote);

router.get('/app/quotes/accepted/', controller.acceptedQuotes);
router.get('/app/quotes/accepted/:id', controller.acceptedQuote);

router.get('/app/quotes/pending/', controller.pendingQuotes);
router.get('/app/quotes/pending/:id', controller.pendingQuote);


module.exports = router;
