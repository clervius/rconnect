'use strict';
 
var controller = require('./taxpayer.controller');
var express = require('express');
var router = express.Router();




router.get('/connect/taxpayers/', controller.newTaxpayers);
router.get('/connect/taxpayers/:id', controller.singleTaxpayer);


module.exports = router;
