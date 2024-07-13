let mongoose = require('mongoose')
let schema = mongoose.Schema({
    first_name:String,
    last_name:String,
    surname:String,
    phone:String,
    gender:String,
    residence:String,
    id_number:String,
    department:String,
    qualification:String
},{
    // table name
    collection:'employees'
})

// we must export the schema to make it usable in other files within the project 
module.exports = mongoose.model('Employee',schema)