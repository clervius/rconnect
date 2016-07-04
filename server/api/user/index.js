'use strict';

var controller = require('./user.controller');
var express = require('express');

var router = express.Router();

// var auth = require()
router.get('/app/user/', controller.show);
//router.get('/account/:id/notify', controller.userNotifications);

module.exports = router;
