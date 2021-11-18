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
exports.fox_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await fox.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
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
exports.fox_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await fox.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
};  
 
// Handle fox update form on PUT. 
exports.fox_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
    ${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await fox.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.name)  
               toUpdate.name = req.body.namw; 
        if(req.body.color) toUpdate.color = req.body.color; 
        if(req.body.weight) toUpdate.weight = req.body.weight; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
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

// Handle a show one view with id specified by query 
exports.fox_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await fox.findById( req.query.id) 
        res.render('foxdetail',  
        { title: 'fox Detail', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
};

// Handle building the view for creating a fox. 
// No body, no in path parameter, no query. 
// Does not need to be async 
exports.fox_create_Page =  function(req, res) { 
    console.log("create view") 
    try{ 
        res.render('foxcreate', { title: 'fox Create'}); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle building the view for updating a fox. 
// query provides the id 
exports.fox_update_Page =  async function(req, res) { 
    console.log("update view for item "+req.query.id) 
    try{ 
        let result = await fox.findById(req.query.id) 
        res.render('foxupdate', { title: 'fox Update', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
};