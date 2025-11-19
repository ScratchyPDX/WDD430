var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.status(200).json({message: 'Messages fetched successfully!'});
});

router.post('/', function(req, res, next) {
  res.status(201).json({
    message: 'Message created successfully!',
  });
});

router.put('/:id', function(req, res, next) {
  res.status(200).json({
    message: 'Message updated successfully!',
  });
});

router.delete('/:id', function(req, res, next) {
  res.status(200).json({
    message: 'Message deleted successfully!',
  });
});

module.exports = router;
