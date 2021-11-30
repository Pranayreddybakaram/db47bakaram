var express = require('express');
const fox_controlers= require('../controllers/fox');

var router = express.Router();
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 


/* GET home page. */
router.get('/', fox_controlers.fox_view_all_Page);
/* GET detail fox page */ 
router.get('/detail', fox_controlers.fox_view_one_Page); ; 
/* GET create fox page */ 
router.get('/create',secured, fox_controlers.fox_create_Page); 
/* GET create update page */ 
router.get('/update',secured, fox_controlers.fox_update_Page);
/* GET create fox page */ 
router.get('/delete',secured, fox_controlers.fox_delete_Page);

module.exports = router;