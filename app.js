'use strict'
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const routeArrays = require("./routes/firtsDay.route")
const combinandoArrays = require("./routes/combinandoArrays.route");

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());

app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','X-API-KEY,Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method, Authorization');
    res.header('Access-Control-Allow-Methods','GET, POST, PUT, DELETE');
    res.header('Allow','GET, POST, PUT, DELETE')
    next();
});

app.use('/firts-day', routeArrays);
app.use('/combinandoArrays', combinandoArrays);


module.exports= app;