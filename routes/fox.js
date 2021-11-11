var express = require('express');
const fox_controlers= require('../controllers/fox');

var router = express.Router();


/* GET home page. */
router.get('/', fox_controlers.fox_view_all_Page);

module.exports = router;