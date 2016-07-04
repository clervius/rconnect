'use strict';

var express = require('express');
var	passport = require('passport');
var	config = require('../config/config');
var	User = require('../api/user/user.model');

// Passport configs
require('./local/passport').setup(User, config);

var router = express.Router();

router.use('/local', require('./local'));

module.exports = router;
