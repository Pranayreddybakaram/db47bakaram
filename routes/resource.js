var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var fox_controller = require('../controllers/fox'); 
 
/// API ROUTE /// 
 
// GET s base. 
router.get('/', api_controller.api); 
 
/// fox ROUTES /// 
 
// POST request for creating a fox.  
router.post('/foxs', fox_controller.fox_create_post); 
 
// DELETE request to delete fox. 
router.delete('/foxs/:id', fox_controller.fox_delete); 
 
// PUT request to update fox. 
router.put('/foxs/:id', fox_controller.fox_update_put); 
 
// GET request for one fox. 
router.get('/foxs/:id', fox_controller.fox_detail); 
 
// GET request for list of all fox items. 
router.get('/foxs', fox_controller.fox_list); 
 
module.exports = router;