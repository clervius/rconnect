'use strict';
 
var controller = require('./taxpayer.controller');
var express = require('express');
var router = express.Router();




router.get('/app/', controller.newTaxpayers);
router.get('/app/taxpayer/:id', controller.singleTaxpayer);

router.get('/app/pending', controller.pendingTaxpayers);
router.get('/app/pending/:tpId', controller.onePendingTaxpayer);

router.get('/app/accepted', controller.acceptedTaxpayers);
router.get('/app/accepted/:tpId', controller.oneAcceptedTaxpayers);


module.exports = router;
