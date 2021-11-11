var fox = require('../models/fox'); 
 
// List of all foxs 
exports.fox_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: fox list'); 
}; 
 
// for a specific fox. 
exports.fox_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: fox detail: ' + req.params.id); 
}; 
 
// Handle fox create on POST. 
exports.fox_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: fox create POST'); 
}; 
 
// Handle fox delete form on DELETE. 
exports.fox_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: fox delete DELETE ' + req.params.id); 
}; 
 
// Handle fox update form on PUT. 
exports.fox_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: fox update PUT' + req.params.id); 
}; 