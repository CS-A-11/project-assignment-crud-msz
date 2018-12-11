
var express = require("express");
var router = express.Router();
var ctrlOthers = require("../controller/other");
var ctrlMain = require("../controller/main");
var ctrlads = require('../controller/ads_controller');
var ctrlsignUp = require("../controller/signUp");
var ctrllogin = require("../controller/login");


//router.get("/login", ctrllogin.login);
//router.post("/login", ctrllogin.userLogin);
//router.get("/logout", ctrllogin.logout);


module.exports = router;
