// import express js
const express = require('express');
// import mongoose 
const mongoose = require('mongoose');

// import routes 
var routes = require('./routes/routes');
// import cors 
var cors = require('cors')
// connect to mongodb 
mongoose.connect("mongodb://localhost:27017/EMP_DB", { useNewUrlParser: true })
.then(()=>{
    // create an express app 
    var app = express()
    // allow client to send/parse data as json object 
    app.use(express.json())
    // load the routes in this app and append a name that can be appended in our base URL 
    app.use('/api', routes)
    // start the server on port 3000
    app.listen(3000, ()=>{
        console.log("Server is running on port 3000")
    });
});