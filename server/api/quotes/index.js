'use strict';
 
var controller = require('./quote.controller');
var express = require('express');
var router = express.Router();




router.get('/app/accepted/', controller.acceptedQuotes);
router.get('/app/accepted/:id', controller.acceptedQuote);

router.get('/app/pending', controller.pendingQuote);
router.get('/app/pending/:id', controller.pendingQuote);


module.exports = router;
