var fox = require('../models/fox'); 
 
// List of all fox 
exports.fox_list = async function(req, res) { 
    try{ 
        thefox = await fox.find(); 
        res.send(thefox); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// for a specific fox. 
exports.fox_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: fox detail: ' + req.params.id); 
}; 
 
// Handle fox create on POST. 
exports.fox_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new fox(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"name":"harsha", "color":"brown", "weight":25} 
    document.name = req.body.name; 
    document.color = req.body.color; 
    document.weight = req.body.weight; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// Handle fox delete form on DELETE. 
exports.fox_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: fox delete DELETE ' + req.params.id); 
}; 
 
// Handle fox update form on PUT. 
exports.fox_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: fox update PUT' + req.params.id); 
}; 

// VIEWS 
// Handle a show all view 
exports.fox_view_all_Page = async function(req, res) { 
    try{ 
        thefox = await fox.find(); 
        res.render('fox', { title: 'fox Search Results', results: thefox }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 