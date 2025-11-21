var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(201).json({
    message: 'Message created successfully!',
  });
});

module.exports = router;
