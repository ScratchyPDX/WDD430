var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.status(200).json({message: 'Documents fetched successfully!'});
});

router.post('/', function(req, res, next) {
  res.status(201).json({
    message: 'Document created successfully!',
  });
});

router.put('/:id', function(req, res, next) {
  res.status(200).json({
    message: 'Document updated successfully!',
  });
});

router.delete('/:id', function(req, res, next) {
  res.status(200).json({
    message: 'Document deleted successfully!',
  });
});

module.exports = router;
