var express = require('express');
const fox_controlers= require('../controllers/fox');

var router = express.Router();


/* GET home page. */
router.get('/', fox_controlers.fox_view_all_Page);
/* GET detail fox page */ 
router.get('/detail', fox_controlers.fox_view_one_Page); ; 
/* GET create fox page */ 
router.get('/create', fox_controlers.fox_create_Page); 
/* GET create update page */ 
router.get('/update', fox_controlers.fox_update_Page);
/* GET create fox page */ 
router.get('/delete', fox_controlers.fox_delete_Page);

module.exports = router;