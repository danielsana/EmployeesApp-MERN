//Import Express JS to be used in creating routes
var express = require("express")
//import our Employee Schema

const bcrypt = require("bcrypt")

var Employee = require("../models/Employee")
var User = require('../models/User')

//create a Router from Express
var router = express.Router();

//POST Route - to Post data using our Employee model variables
router.post("/add", async (req, res)=>{
    //Provide data payload using req => ths is the Payload sent by Client, through, Angular, Curl, or even Postman
    var post = Employee({
        //Extract each variable from request

        first_name: req.body.first_name,
        last_name: req.body.last_name,
        surname: req.body.surname,
        phone: req.body.phone,
        gender: req.body.gender,
        residence: req.body.residence,
        id_number: req.body.id_number,
        department: req.body.department,
        qualification: req.body.qualification
    })
    try {
        //Post the data 
        var result = await post.save()
        res.status(200).json({ 'message': 'Employee Registered' })
    }
    catch (err) {
        res.status(200).json({ 'message': 'Error Occured!' })
        console.log(err)
    }
});

// get all employees
router.get("/employees", async(req,res)=>{
    try{
        // here we find all employees from employee model 
        var result = await Employee.find({})
        res.status(200).json({"message": result})
    }
    catch(err){
        res.status(200).json({"message": "Error Occured!"})
    }
});

// get by first name 
router.get("/employees/byname", async(req,res)=>{
    try{
        // here we find one employee from employee model by name
        var first_name =req.body.first_name
        var result = await Employee.findOne({"first_name":first_name})
        res.status(200).json({"message":result})
        }
    catch(err){
        res.status(200).json({"message": "Error Occured!"})
    }
});

// update an employee 
//PUT
router.put("/employees/update", async (req, res) => {
    try {
        var first_name = req.body.first_name
        var qualification = req.body.qualification

        var result = await Employee.updateOne({ 'first_name': first_name }, {
            $set: {
                qualification: qualification
            }
        });

        res.status(200).json({ 'message': result })
    }
    catch (err) {
        res.status(400).json({ 'message': err.message })
    }
});

// delete 

//DELETE
router.delete("/employees/delete", async (req, res) => {
    try {
        var first_name = req.body.first_name

        var result = await Employee.deleteOne({ 'first_name': first_name });

        res.status(200).json({ 'message': result })
    }
    catch (err) {
        res.status(400).json({ 'message': err.message })
    }
});

router.post('/register-user', async (req, res) => {
    bcrypt.hash(req.body.password, 10).then((hash) => {
      const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hash,
      })
        
      user.save()
        .then((response) => {
          res.status(201).json({
            message: 'User successfully created!',
            result: response,
          })
        })
        .catch((error) => {
          res.status(500).json({
            error: error,
          })
        })
    })
})


//
module.exports = router;