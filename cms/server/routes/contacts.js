var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.status(200).json({message: 'Contacts fetched successfully!'});
});

router.post('/', function(req, res, next) {
  res.status(201).json({
    message: 'Contact created successfully!',
  });
});

router.put('/:id', function(req, res, next) {
  res.status(200).json({
    message: 'Contact updated successfully!',
  });
});

router.delete('/:id', function(req, res, next) {
  res.status(200).json({
    message: 'Contact deleted successfully!',
  });
});

module.exports = router;

