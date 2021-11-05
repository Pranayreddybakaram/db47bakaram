var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('fox', { title: 'search results for fox' });
});

module.exports = router;