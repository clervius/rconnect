'use strict';

var express = require('express');
	passport = require('passport');
	config = require('../config/config');
	User = require('../api/user/user.model');

// Passport configs
require('./local/passport').setup(User, config);

var router = express.Router();

router.use('/local', require('./local'));

module.exports = router;
