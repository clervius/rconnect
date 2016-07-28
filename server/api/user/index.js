'use strict';

var controller = require('./user.controller');
var express = require('express');

var router = express.Router();

// var auth = require()
router.post('/app/user/updateAcct', controller.changeInfo, function(req, res){
	res.redirect('/choice');
});
router.get('/app/user/:id', controller.show);

//router.get('/account/:id/notify', controller.userNotifications);

module.exports = router;
