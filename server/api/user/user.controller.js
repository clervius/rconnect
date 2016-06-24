'use strict';

var User = require('./user.model');
var passport = require('passport');
var config = require('../../config/config');
var jwt = require('jsonwebtoken');
var validationError = function(res, err) {
  return res.json(422, err);
};


