const express = require('express');
const path  = require('path');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var router = express.Router();

//Init App
const app=express();
var indexRouter = require("./routes/index");

//Routes
app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'pug');
//Static file
app.set(express.static(path.join(__dirname,'view')));
app.use('/',express.static(path.join(__dirname, 'public')))
//Home routes
  app.use("/", indexRouter);

//app.get("/",function(req,res){
//  res.render('index');
//  });



app.listen(process.env.PORT || 4001, function(){
    console.log('Your node js server is running');
})
module.exports= router;
