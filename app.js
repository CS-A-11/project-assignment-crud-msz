const express = require('express');
var router = express.Router();
const path  = require('path');
var bodyParser = require('body-parser')
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var mongoose = require ("mongoose");
var session = require("express-session");
var MongoStore = require("connect-mongo")(session);
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })
require("./model/db");
mongoose.set('useCreateIndex', true);
// import dependencies
var dotenv=require('dotenv');

// set up dotenv
require('dotenv').config();

//Init App
const app=express();

//Router Get
var indexRouter = require("./routes/index");
var adsRouter = require('./routes/adsRoute');
var regRouter = require('./routes/signup');
var logRouter = require('./routes/login');
//body parser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//  session({
//    secret: "MSZ991",
//    resave: true,
//    saveUninitialized: false,
    // store: new MongoStore({
    //   mongooseConnection: db
    // })
//  })
//);
app.use(session({secret: 'ssshhhhh',
                 resave: true,
                 saveUninitialized: false,}));
var sess;

app.use("/", function(req, res, next) {
  if (req.session) {
    console.log("GOOOOOOOOD");
    res.locals=req.session.id;
    res.locals.user = req.session;
  }
  next();
});
app.use("/", indexRouter);
app.use('/ad', adsRouter);
app.use('/',regRouter);
app.use('/login',logRouter);

//Routes
app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'pug');

//Static file
app.set(express.static(path.join(__dirname,'view')));
app.use('/',express.static(path.join(__dirname, 'public')))
//body-parser

//Home routes

//Listing
app.listen(process.env.PORT || 3003, function(){
    console.log('Your node js server is running');
})
module.exports= router;


//////////////////////////////////TASK TO COMPLETE//////////////////////////////
//Login and Singup
//CRUD
//Search
//vendor
//Admin
