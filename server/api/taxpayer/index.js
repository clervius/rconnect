'use strict';
 
var controller = require('./taxpayer.controller');
var express = require('express');
var router = express.Router();




router.get('/app/taxpayers/', controller.newTaxpayers);
router.get('/app/taxpayers/:id', controller.singleTaxpayer);


module.exports = router;
