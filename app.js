const express = require('express');
const path  = require('path');
var router = express.Router();

//Init App
const app=express();
var indexRouter = require("./routes/index");
//Routes
app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'pug');
//Static file
app.set(express.static(path.join(__dirname,'public')));
//Home routes
  app.use("/", indexRouter);

//app.get("/",function(req,res){
//  res.render('index');
//  });
app.get('/hostels',function(req,res){
  res.render('hostels',{title:'MSZ991'});
});

app.listen(process.env.PORT || 4000, function(){
    console.log('Your node js server is running');
})
module.exports= router;
