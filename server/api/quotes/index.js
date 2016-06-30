'use strict';
 
var controller = require('./quote.controller');
var express = require('express');
var router = express.Router();



router.post('/app/taxpayers/:id', controller.createQuote);
router.get('/app/accepted/', controller.acceptedQuotes);
router.get('/app/accepted/:id', controller.acceptedQuote);

router.get('/app/pending', controller.pendingQuotes);
router.get('/app/pending/:id', controller.pendingQuote);


module.exports = router;
