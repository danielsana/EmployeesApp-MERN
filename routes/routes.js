// import express js to create route 
var express = require("express")
// import the schema 
var Employee = require("../models/Employee")

// create a router from express 
var router = express.Router()

// create a route for post request
router.post("/add",async(req,res)=>{
    // provide data payload using req 
    var post = Employee({
        // extract each variable from request 
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        surname:req.body.surname,
        phone:req.body.phone,
        gender:req.body.gender,
        residence:req.body.residence,
        id_number:req.body.id_number,
        department:req.body.department,
        qualification:req.body.qualification
    })
    try{
        // save the data to the database
        var result = await post.save()
        res.status(200).json({'message':'Employees Registered'})
    }
    catch(err){
        res.status(500).json({'message':'Error Occured'})
    }
})

module.exports = router;