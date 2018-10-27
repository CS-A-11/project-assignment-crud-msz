const express = require('express');
const path  = require('path');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var router = express.Router();
// import dependencies
var dotenv=require('dotenv');
// set up dotenv
require('dotenv').config();
//Init App
const app=express();
var indexRouter = require("./routes/index");
//Mongodb
mongoose.connect('mongodb://hostlyte:rizvi12345@ds143143.mlab.com:43143/hostlyte');


mongoose.connection.on('connected',()=>{
    console.log("Mongo DB Connected Successfully at MLAB");
});
//on disconnection
mongoose.connection.on('disconnected',()=>{
    console.log("Mongo DB disconnected Successfully ");
});
process.on('unhandledRejection', (reason, promise) => {
  console.log('Unhandled Rejection at:', reason.stack || reason)
  // Recommended: send the information to sentry.io
  // or whatever crash reporting service you use
});
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



app.listen(process.env.PORT || 3000, function(){
    console.log('Your node js server is running');
})
module.exports= router;
