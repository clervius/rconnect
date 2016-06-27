'use strict';
 
var controller = require('./taxpayer.controller');
var express = require('express');
var router = express.Router();




router.get('/app/', controller.newTaxpayers);
router.get('/app/taxpayer/:id', controller.singleTaxpayer);


module.exports = router;
